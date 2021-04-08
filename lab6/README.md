# Exploring the Relationships between Poverty and Energy Production Facilities in Wyoming

This project is part of Lab #6 for UMBC's GES 687 course in the Spring of 2021. Here, you will find basic information about this project and its findings. Raw data can be found in the Data folder, outputs can be found in the Bin folder, and map products are located in the Maps folder.

# Introduction

Inspired by a recent [New York Times Daily Podcast Episode](https://www.nytimes.com/2021/03/16/podcasts/the-daily/wind-power-wyoming-climate-change.html), this project
aimed to explore the relationships between poverty levels and local energy production facilities, focusing on wind and coal energy production sites. These two types of power plants are of particular interest, because Wyoming's economy has historically been enormously vested in coal mining and sales; however, growing divestment from coal and other fossil fuels both nationally and internationally are set to change the energy production landscape and state economy of Wyoming. As many local stakeholders in Wyoming's coal industry disavow wind energy as an economically viable alternative to coal, this study aims to explore the validity of such claims by looking at the spatial relationships between poverty levels and each type of power production site at the county level.

# Data

Data on estimates of numbers of people who have earned income below the federal poverty line and was sourced from the [United States Census Bureau's 5-Year American Community Surveys](https://www.census.gov/data/developers/data-sets/acs-5year.html), while
point data on power generation plants were sourced from the [Wyoming Geospatial Hub](https://data.geospatialhub.org/datasets/63934a36caea4bfeb97a7d7aa021daad_0?geometry=-116.070%2C41.634%2C-99.382%2C44.444). 


# Processing & Transformations

Percentages of county populations who earned incomes below the poverty line in the ACS5 periods of study had to be calculated. This was done in R by downloading the total population estimates of the counties along with the estimates of people within the counties who had earned incomes below the federal poverty line in those years, and dividing the latter by the former. Afterwards, data from the 2005 - 2009 study was joined to the 2015 - 2019 study using a left join, and the change over time in percentages of county populations whose incomes were below the poverty line were calculated by subtracting 2005 - 2009 data from the 2015 - 2019 data. A new variable was generated in the final combined dataset showing this. Then, the dataset was saved as a .geojson file and imported to QGIS for analysis.

# Analysis

In QGIS, the point data showing Wyoming's power generation sources was imported, and two new layers were generated from selections of power plants, showing either only wind energy production sites or coal energy production sites, then the poverty level data was imported. The "count points in polygons" feature was used to create two new polygon layers showing the counties with total counts of the wind and coal production facilities in each county. Finally, two choropleth maps were produced by overlaying the power plant facility count polygons over the poverty level polygons, creating a bivariate color scheme using the "multiply" rendering setting for the top layer. Bivariate legends were created using the "Bivariate Legend" plugin, and color schemes were based on sample schemes by [Joshua Stevens](https://www.joshuastevens.net/cartography/make-a-bivariate-choropleth-map/). 


# Results

17 of Wyoming's 23 counties saw increases in estimates of people earning wages below the poverty line between the 2005 - 2009 and 2015 - 2019 ACS5 study periods. Of these 17, 5 featured coal-fueled power plants: Weston County (1 coal power plant, 6.6% increase in poverty), Campbell County (7 coal power plants, 6% increase in poverty), Sweetwater County (3 coal power plants, 4% increase in poverty), Converse County (1 coal power plant, 2.8% increase in poverty), and Platte County (1 coal power plant, 2.7% increase in poverty). 5 counties with wind energy power plants additionally saw increase in poverty, but generally to lesser degrees of severity: Converse County (1 wind farm, 2.8% increase in poverty), Carbon County (5 wind farms, 2.8% increase in poverty), Uinta County (2 wind farms, 0.9% increase in poverty), Laramie County (0.4% increase in poverty), and Albany County (0.07% increase in poverty). No coal-fueled power production sites were located in counties that saw decreases in poverty, while one wind farm was located in Natrona County, which saw a .005% decrease.

These findings point to an association between the presence of wind farms and reduction in the negative economic ramifications of coal divestment, as all of the counties with wind farms saw lower rises in poverty levels and Converse County, which had one of each type of power plant, saw a lower rise than 3 of the four that did not have wind farms. While there are many other factors that may relate to poverty levels and changing power production infrastructure, such as political and corporate opposition, this can be seen as strengthening the case of wind energy as at least reducing the economic burden of coal energy divestment.

One new geojson file was created: a geographic feature that has data on county population and poverty levels from the ACS5 2005 - 2009 and 2015 - 2019 study periods and a variable showing how they have changed over time. This file is located in the bin folder. Additionally, two bivariate maps showing poverty levels and counts of power production sites are located in the Maps folder. These outputs relate to the current 686 course content concerning creating and thoroughly documenting data and data manipulations and producing bivariate choropleth maps showing change over time.
