# Crag Equity: Local Demographics and Outdoor Rock Climbing Sites in Arizona

## Introduction
Recreational rock climbing has for most of its history been predominantly practiced by upper-middle class white people. Recent research indicates that this is still the predominant nature of participation in climbing activities, with a recent large-scale survey indicating approximately 90% of climbers identify as white, while a 2019 survey of over 500 climbers further revealed that 72% possessed at least a bachelor’s degree and 48% had personal incomes of over $50,000 (Carter et al., 2020; Maples et al., 2019). The relative uniformity of these demographics, however, may not always be aligned with those of the areas surrounding popular rock climbing destinations. Developing a greater understanding of these disparities may be of use for both recreation and social equity activists wishing to improve both the diversity of outdoor climbing communities and strengthen relationships between recreationists and local communities in popular destinations. This research therefore aims to further knowledge concerning issues of demographic diversity as they concern rock climbing activities in the state of Arizona, giving special attention to race and ethnicity, individual income, and education levels. <br>

## Data Collection 

Demographic data for this study was sourced from the U.S. Census Bureau’s API, while geospatial data on the location of rock climbing features were generated using a combination of CSV’s downloaded from [Mountain Project’s Arizona pages] (https://www.mountainproject.com/area/105708962/arizona). Demographic data was downloaded at the census-tract level from the 2010 – 2014 and 2015 – 2019 ACS5 surveys, and included: the total population of  census tracts; total populations of people who identify as white, black, Asian, Hispanic, Native American, Native Hawaiian and Pacific Islanders, Other races, and two or more races; median individual income; and total population with bachelor’s degrees. <br>
  
## Data Processing

Census data were processed using R Studio. Census tract data was downloaded for the entire state in three sets: two sets of demographic data from the two periods of interest without geometries, and a third one that included geometries. This set up was necessary due to the subsequent creation of a diversity index using the “Vegan” package in R, which requires all variables to be numeric. Once census data was loaded into R, a new diversity index variable was created for data from each year using the “diversity” function of the “Vegan” package, which calculated Simpson’s Diversity Index for each census tract based on the 8 racial and ethnic groups listed above. This approach was based on the method used by USA Today to quantify diversity in the U.S. in 2001, with scores of 0 indicating no diversity and scores of 1 indicating “infinite diversity” (Schilling, 2002). Additionally, the percentages of the population who have bachelor’s degrees were calculated and added to the datasets as new columns. The demographic datasets were joined together with the dataset that included geometry, creating a single spatial object with all of the relevant variables. Finally, change over time variables were calculated for the diversity indices and median income information, and the data set was exported as a .geojson file. An an annotated, reproducible HTML markdown script detailing this process can be found [here.](Code/final_project_script.md) <br>

Separately, the point data showing climbing sites in Arizona was created using Microsoft Excel and QGIS. The data were produced by exporting over 120 CSV files listing rock climbing routes using Mountain Project’s “Export CSV” function, which is meant to help climbers generate lists of specific climbing routes they would like to try. All routes from Arizona were exported and manually combined to create a single master spreadsheet listing all documented climbing routes in the state, which amounted to over 10,000. This table was then imported into QGIS and given geometry based on the longitude and latitude columns included for each entry. Finally, to show only distinct climbing “areas” rather than individual routes, the data were dissolved based on the “area” column, reducing it to a list of 1,711 routes at distinct climbing areas. For the purpose of this project, I have opted to use the term “climbing feature” to describe these observations, as they include cliffs, mountains, boulder fields, and canyons. <br>

Both the climbing features and demographic data were then combined in QGIS using the “Count Points in Polygon” tool. This generated a new shapefile showing all of the demographic data along with a new column listing the total number of climbing features found in each census tract. This shapefile was used in combination with the original demographic one to create a series of bivariate maps exploring the relationships between the presence of climbing features and the variables of interest. Bivariate color schemes were based on those created by Joshua Stevens (Stevens, 2015). To further strengthen the results of the analysis, the tabular data from the demographics & climbing shapefile were exported as a new CSV and imported into Stata for statistical analyses. In Stata, a binary variable was created to categorize each census tract based on the presence of climbing features, and a series of T-tests were conducted to observe any statistically significant differences in the variables across this distinction. Those for which statistically significant differences were identified were further assessed using order of least squares regressions to characterize the strength of the correlations. Any correlations that appeared to be of interest were also tested using the change-over-time variables which were calculated in R Studio to see if they indicated any sorts of temporal trends. All stata outputs can be viewed [here](Code) <br>

A final web map was produced to illustrate the data for the 2015 – 2019 census data. This was done in QGIS, with a bivariate class variable being manually created in order to symbolize the correlation appropriately. The web map was thereafter uploaded on the researcher’s Github portfolio.

## Results

Out of Arizona’s 1,526 census tracts, 94 contain rock climbing features which are publicized on Mountain Project. The 5 census tracts with the highest concentrations are: Tract 40.52 in Pima County (290 features), Tract 4 in Cochise County (137), Tracts 16, 22, and 15 in Coconino County (114, 107, and 104 features respectively). The average number of climbing features per census tract is 18.20 and the median is 3. Moreover, the mean and median Simpson’s Diversity Index scores for tracts overall were 0.557 and 0.546 respectively.   Geographic distributions of these data are displayed in figures 1 and 2 below.  Bivariate maps were subsequently produced comparing the presence of climbing features to diversity as well as the other variables of interest, shown in figures 3 – 6. 

### *Click any of the maps below to open an interactive web map!*

[<img src = "Images/AZ Climbing Feature Density.png">](https://brianhcruz.github.io/486_final/webmap/index.html#6/33.797/-112.917)

Figure 1
 
[<img src = "Images/Arizona Diversity 2019.png">](https://brianhcruz.github.io/486_final/webmap/index.html#6/33.797/-112.917)
Figure 2
 
[<img src = "Images/diversity_index_climbing.png">](https://brianhcruz.github.io/486_final/webmap/index.html#6/33.797/-112.917)
Figure 3

[<img src = "Images/income_map.png">](https://brianhcruz.github.io/486_final/webmap/index.html#6/33.797/-112.917)
Figure 4
 
[<img src = "Images/ed_map.png">](https://brianhcruz.github.io/486_final/webmap/index.html#6/33.797/-112.917)
Figure 5
 
Visually, these maps appear to indicate potential negative relationships between local demographic diversity and climbing features, positive ones between education and climbing features, and ambiguous ones concerning individual income. Several statistical tests thereafter clarified the scope and nature of these correlations.

At the .05 significance level, overall diversity of within census tracts was determined to be statistically significantly less in tracts where rock climbing sites are present, with non-climbing tracts having a mean Simpson’s Diversity index of 0.584 compared to 0.559 in tracts with climbing. Moreover, the populations of people who identify as black, Asian, Native Hawaiian/Pacific Islander, other races, and two or more races were shown to be statistically significantly lower in census tracts with climbing features. Hispanic, white, and Native American populations showed no statistically significant differences when grouped in this way. These distinctions are visualized in Figure 6. Regression analyses of all of these relationships, however, effectively showed no correlation on the part of the presence of climbing features, with all relationships having R2 values of less than .01.

 
[<img src = "Images/horizontal_diversity_graph.png">](https://brianhcruz.github.io/486_final/webmap/index.html#6/33.797/-112.917)
Figure 6

Further testing showed no statistically significant distinctions between median individual income with the presence of climbing features, but census tracts with climbing features were found to have statistically higher (at the .05 level) percentages of their populations with bachelor’s degrees  on average (24% vs. 20%). Much like the the relationship between diversity and climbing features, however, regression analyses showed almost no correlation on the part of climbing features (R2 = <.01).
To examine these relationships over time, the same statistical tests were carried out using the change-over-time variables for the diversity index, income, and education. T-tests revealed that there was only a statistically significant difference in changes in diversity (at the .05 level) over time in census tracts with or without rock climbing features. A regression analysis again indicated almost no correlation between climbing sites and growth in diversity (R2 = <.01). These changes are illustrated below in Figure 7. 


<img src = "Images/div_change_map.png">
Figure 7

## Discussion & Conclusion

Given the data presented here, it is apparent that there are small, but statistically significant differences in census tract diversity given the presence or lackthereof of rock climbing features. Both tracts with and without climbing features have populations with nearly identical white and Hispanic majorities, but those with climbing features have significantly fewer residents of all other racial groups except for Native Americans. This also stands true for census tract diversity as it changed between the estimates of the two 5-year periods of study, meaning that census tracts with climbing features were more likely to see decreases in diversity. Additionally, there is a slight difference between the presence of rock climbing features within census tracts and percentages of local populations who hold bachelor’s degrees; however, climbing features are not linked to any particular trends in changing percentages of populations with bachelor’s degrees over time for the two survey periods compared. <br>

These findings, of course, do not indicate any significant correlation. There are many other factors which may affect these patterns, such as the lower population numbers and limited work opportunities that accompany life in more rural settings where most rock climbing sites are situated. Indeed, it is entirely plausible that decreasing diversity may result from people leaving more rural tracts for urbanized areas with greater career prospects. That said, it is difficult to comment on the variation in education attainment given the presence of rock climbing sites, and numerous other social factors are likely driving this observation. It must also be noted that the rock climbing sites observed in this study were only those that have been published on Mountain Project. It is entirely likely that there are many underreported climbing locations and newly developing ones which have not yet been publicized. Given these limitations, this research should thus be treated as a starting point for subsequent investigations into rock climbing and localized census demographics.

## References:
Carter, David P., Hutson, G., Lam, P., Rose, J., & Furman, N. (2020). The self-governance challenges facing climbers, with examples from Utah, Colorado, & Ontario. Journal of Outdoor Recreation and Tourism, 31, 100323. https://doi.org/10.1016/j.jort.2020.100323

Maples, J., Bradley, M., Giles, S., Leebrick, R., and Clark, B. (2019). “Climbing out of Coal Country: The Economic Impact of Rock Climbing in West Virginia’s New River Gorge.” Journal of Appalachian Studies, 25(2): 184-201 

Schilling, M. (2002). “Measuring Diversity in the United States.” Math Horizons, 9(4): 29 – 30.
