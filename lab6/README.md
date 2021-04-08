# Exploring the Relationships between Poverty and Energy Production Facilities in Wyoming

This project is part of Lab #6 for UMBC's GES 687 course in the Spring of 2021. Here, you will find basic information about this project and its findings. Raw data can be found in the Data folder, outputs can be found in the Bin folder, and map products are located in the Maps folder.

# Introduction

Inspired by a recent [New York Times Daily Podcast Episode](https://www.nytimes.com/2021/03/16/podcasts/the-daily/wind-power-wyoming-climate-change.html), this project
aimed to explore the relationships between poverty levels and local energy production facilities, focusing on wind and coal energy production sites. These two types of power plants are of particular interest, because Wyoming's economy has historically been enormously vested in coal mining and sales; however, growing divestment from coal and other fossil fuels both nationally and internationally are set to change the energy production landscape and state economy of Wyoming. As many local stakeholders in Wyoming's coal industry disavow wind energy as an economically viable alternative to coal, this study aims to explore the validity of such claims by looking at the spatial relationships between poverty levels and each type of power production site at the county level.

# Data

Data on estimates of numbers of people who have earned income below the federal poverty line and was sourced from the [United States Census Bureau's 5-Year American Community Surveys](https://www.census.gov/data/developers/data-sets/acs-5year.html), while
point data on power generation plants was sourced from the [Wyomigng Geospatial Hub](https://data.geospatialhub.org/datasets/63934a36caea4bfeb97a7d7aa021daad_0?geometry=-116.070%2C41.634%2C-99.382%2C44.444). 


# Processing & Transformations

Percentages of county populations who earned incomes below the poverty line in the ACS5 periods of study had to be calculated. This was done in R by downloading the total population estimates of the counties along with the estimates of people within the counties who had earned incomes below the federal poverty line in those years, and dividing the latter by the former. Afterwards, data from the 2005 - 2009 study was joined to the 2015 - 2019 study using a left join, and the change over time in percentages of county populations whose incomes were below the poverty line were calculated by subtracting 2005 - 2009 data from the 2015 - 2019 data. A new variable was generated in the final combined dataset showing this. Then, the dataset was saved as a .geojson file and imported to QGIS for analysis.

In QGIS, the point data showing Wyoming's power generation sources was imported, and two new layers were generated from selections of power plants, showing either only wind energy production sites or coal energy production sites, then the poverty level data was imported. The "count points in polygons" feature was used to create two new polygon layers showing the counties with total counts of the wind and coal production facilities in each county. Finally, two choropleth maps were produced by overlaying the power plant facility count polygons over the poverty level polygons, creating a bivariate color scheme using the "multiply" rendering setting for the top layer. Bivariate legends were created using the "Bivariate Legend" plugin, and color schemes were based on sample schemes by [Joshua Stevens](https://www.joshuastevens.net/cartography/make-a-bivariate-choropleth-map/). 

# Analysis
What did you learn? What is the **analysis** you'll be performing on your data sets? You may need to explain some of your R code not explained above.


# Results

One new geojson file will be created: a geographic feature that has data on county population and poverty levels from the ACS5 2005 - 2009 and 2015 - 2019 study periods and a variable showing how they have changed over time. This file will be located in the bin folder. Additionally, two bivariate maps 

What **outputs** will you be creating and how are they directly connected to the class? Explain your bin folder.
