---
title: "GES 687 Final Project"
author: "Brian Horlick-Cruz (bhorlick16@gmail.com)"
date: "May 18, 2021"
output:
  html_document:
    keep md: true
---

## Setup 

```{r}
#setup

knitr::opts_knit$set(root.dir = "C:/Users/bhorl/OneDrive/Desktop/686_final") #set knit directory

library(tidyverse)
library(tidycensus)
library(ggplot2)
library(sf)
library(vegan) # This is a package normally used by ecologists to analyze species and population diversity
library(dplyr)
  theme_set(theme_bw())


# Adjust settings for tidycensus

options(tigris_class = "sf")
options(tigris_use_cache = TRUE)
census_api_key("baf2fc7668ed54084f5c262bbdb1dbe2a88a9161")

```

## Download the necessary datasets from the Census Bureau. Note that census tract data should be downloaded without geometry in order to facilitate calculation of the diversity index with Vegan.


```{r}
#Load ACS5 data from 2014 - 2019

# download 2010 - 2014 data

az_tracts_2014 <- get_acs(geography = "tract", 
     variables = c(pop = "B01003_001", #total population
                   ind_pop = "B02001_004", #total population American Indian alone
                   black_pop = "B02001_003", #total population Black alone
                   hisp_pop = "B03002_001", #total Hispanic population
                   asian_pop = "B02001_005", #total population Asian alone
                   wh_pop = "B02001_002", #total population white alone
                   nh_pop = "B02001_006", #total population native Hawaiian and Pacific Islander alone
                   other ="B02001_007", #total population some other race alone
                   two_pop = "B02001_008", #total population two or more races alone
                   inc = "B06011_001", #estimated median income in past 12 months
                   edu = "B16010_041" #estimated total population with bachelor's degree or higher
                   ),
     year = 2014,
     survey = "acs5",
     state = c(04),
     county = c("Pima County", "Cochise County","Santa Cruz County","Pinal County","Yavapai County","Yuma County", "Maricopa County", "Mohave County","Navajo County", "Coconino County", "Gila County", "Graham County","Greenlee County", "La Paz County", "Apache County"),
     geometry = FALSE, # no geometry needed for this feature, because geometry variables prevent diversity analyses with Vegan
     output = "wide") 


# download 2015 - 2019 survey data

az_tracts_2019 <- get_acs(geography = "tract", 
     variables = c(pop = "B01003_001", #total population
                   ind_pop = "B02001_004", #Total population American Indian Alone 
                   black_pop = "B02001_003", #Total population lack alone 
                   hisp_pop = "B03002_001", #total Hispanic population
                   asian_pop = "B02001_005", #total population Asian alone 
                   wh_pop = "B02001_002", #total population white alone
                   nh_pop = "B02001_006", #total population native Hawaiian and Pacific Islander alone
                   other ="B02001_007", #total population some other race alone
                   two_pop = "B02001_008", #total population two or more races
                   inc = "B06011_001", #estimated median income in past 12 months
                   edu = "B16010_041" #estimated total population with bachelor's degree or higher
                   ),
     year = 2019,
     survey = "acs5",
     state = c(04),
     county = c("Pima County", "Cochise County","Santa Cruz County","Pinal County","Yavapai County","Yuma County", "Maricopa County", "Mohave County","Navajo County", "Coconino County", "Gila County", "Graham County","Greenlee County", "La Paz County", "Apache County"),
     geometry = FALSE, # geography not necessary for this feature
     output = "wide") 

# download ACS5 data with geometry for joining 

az_tracts_geom <- get_acs(geography = "tract", 
     variables = c("pop" = "B01003_001" #total populatio
                   ),
     year = 2019,
     survey = "acs5",
     state = c(04),
     county = c("Pima County", "Cochise County","Santa Cruz County","Pinal County","Yavapai County","Yuma County", "Maricopa County", "Mohave County","Navajo County", "Coconino County", "Gila County", "Graham County","Greenlee County", "La Paz County", "Apache County"),
     geometry = TRUE, # this dataset will include geometry for creation of the final geojson file
     output = "wide") 


```


## Calculate Simpson's Diversity Index for each census tract.

```{r}

# First, set up the selection of racial/ethnic identity categories which will be used to calculate the index. For this measure, there are 8 different races/ethnicities which must be grouped together. 


index_1 <- select(az_tracts_2014, ind_popE, black_popE, hisp_popE, asian_popE, wh_popE, nh_popE, two_popE, otherE) #2014 diversity index variable selection


index_2 <- select(az_tracts_2019, ind_popE, black_popE, hisp_popE, asian_popE, wh_popE, nh_popE, two_popE, otherE) # 2019 diversity index variable selection


# Next, create new fields in each dataset which will be populated with the Simpson diversity index of each census tract. This is done with the "diversity" function of the vegan package.

az_tracts_2014$diversity <- diversity(index_1, "simpson") 

az_tracts_2019$diversity <- diversity(index_2, "simpson")


```


## Calculate percentages of populations with bachelor's degrees 

```{r}


# 2014 percentages

az_tracts_2014$perc_ed <- az_tracts_2014$eduE/az_tracts_2014$popE

# calculate 2019 percentages

az_tracts_2019$perc_ed <- az_tracts_2019$eduE/az_tracts_2019$popE

```

# Reproject the geometry file so that it is in web mercator (3857).

```{r}
# reproject az_tracts_geom to web mercator (3857). This will allow it to easily be published as a web map.

az_tracts_geom_reproj <- st_transform(az_tracts_geom, 3857)
```

# Join all of the datasets together.

```{r}

# use a left join to combine the 2019 and 2014 datasets

az_join <- left_join(az_tracts_2019, az_tracts_2014, 
                             by = "GEOID",
                             suffix = c(".19", ".14"))

# use another left join to add the combined dataset to the one with projected geometry

arizona <- left_join (az_join, az_tracts_geom_reproj,
                      by = "GEOID",
                      suffix = c(".11", ".19"))


# View the final data set to make sure the join was done properly.

view(arizona)


```



## Calculate change over time fields for the variables of interest.

```{r}

# calculate changes in diversity between the 2014 and 2019 surveys and create new columns to display these figures

arizona$div_change <- arizona$diversity.19 - arizona$diversity.14

# calculate changes in income between the 2014 and 2019 surveys and put them in a new column.

arizona$inc_change <- arizona$incE.19 - arizona$incE.14

# calculate changes in percentages of populations with bachelor's degrees or higher between the 2014 and 2019 surveys and put them in a new column.

arizona$edu_change <- arizona$perc_ed.19 - arizona$perc_ed.14


```


## Save final sptial feature as geojson and export for further analysis in QGIS

```{r}
# save the final spatial object as a geojson for further processing in QGIS and stata

st_write(arizona, "arizona_equity_map.geojson")
```
