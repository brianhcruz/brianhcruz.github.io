var wms_layers = [];


        var lyr_CartoEcoBasemap_0 = new ol.layer.Tile({
            'title': 'Carto Eco Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://cartocdn_a.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png'
            })
        });
var format_ArizonaStateBoundary_1 = new ol.format.GeoJSON();
var features_ArizonaStateBoundary_1 = format_ArizonaStateBoundary_1.readFeatures(json_ArizonaStateBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArizonaStateBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArizonaStateBoundary_1.addFeatures(features_ArizonaStateBoundary_1);
var lyr_ArizonaStateBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArizonaStateBoundary_1, 
                style: style_ArizonaStateBoundary_1,
                interactive: false,
                title: '<img src="styles/legend/ArizonaStateBoundary_1.png" /> Arizona State Boundary'
            });
var format_USCensusTractsPopulationEstimates20142018_2 = new ol.format.GeoJSON();
var features_USCensusTractsPopulationEstimates20142018_2 = format_USCensusTractsPopulationEstimates20142018_2.readFeatures(json_USCensusTractsPopulationEstimates20142018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USCensusTractsPopulationEstimates20142018_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USCensusTractsPopulationEstimates20142018_2.addFeatures(features_USCensusTractsPopulationEstimates20142018_2);
var lyr_USCensusTractsPopulationEstimates20142018_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USCensusTractsPopulationEstimates20142018_2, 
                style: style_USCensusTractsPopulationEstimates20142018_2,
                interactive: true,
    title: 'U.S. Census Tracts Population Estimates, 2014 - 2018<br />\
    <img src="styles/legend/USCensusTractsPopulationEstimates20142018_2_0.png" /> 27 - 196 <br />\
    <img src="styles/legend/USCensusTractsPopulationEstimates20142018_2_1.png" /> 196 - 258 <br />\
    <img src="styles/legend/USCensusTractsPopulationEstimates20142018_2_2.png" /> 258 - 296 <br />\
    <img src="styles/legend/USCensusTractsPopulationEstimates20142018_2_3.png" /> 296 - 358 <br />\
    <img src="styles/legend/USCensusTractsPopulationEstimates20142018_2_4.png" /> 358 - 417 <br />\
    <img src="styles/legend/USCensusTractsPopulationEstimates20142018_2_5.png" /> 417 - 1180 <br />'
        });
var format_TribalLands_3 = new ol.format.GeoJSON();
var features_TribalLands_3 = format_TribalLands_3.readFeatures(json_TribalLands_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TribalLands_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TribalLands_3.addFeatures(features_TribalLands_3);
var lyr_TribalLands_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TribalLands_3, 
                style: style_TribalLands_3,
                interactive: true,
                title: '<img src="styles/legend/TribalLands_3.png" /> Tribal Lands'
            });
var format_IncorporatedCityBoundaries_4 = new ol.format.GeoJSON();
var features_IncorporatedCityBoundaries_4 = format_IncorporatedCityBoundaries_4.readFeatures(json_IncorporatedCityBoundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncorporatedCityBoundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncorporatedCityBoundaries_4.addFeatures(features_IncorporatedCityBoundaries_4);
var lyr_IncorporatedCityBoundaries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IncorporatedCityBoundaries_4, 
                style: style_IncorporatedCityBoundaries_4,
                interactive: true,
                title: '<img src="styles/legend/IncorporatedCityBoundaries_4.png" /> Incorporated City Boundaries'
            });

lyr_CartoEcoBasemap_0.setVisible(true);lyr_ArizonaStateBoundary_1.setVisible(true);lyr_USCensusTractsPopulationEstimates20142018_2.setVisible(true);lyr_TribalLands_3.setVisible(true);lyr_IncorporatedCityBoundaries_4.setVisible(true);
var layersList = [lyr_CartoEcoBasemap_0,lyr_ArizonaStateBoundary_1,lyr_USCensusTractsPopulationEstimates20142018_2,lyr_TribalLands_3,lyr_IncorporatedCityBoundaries_4];
lyr_ArizonaStateBoundary_1.set('fieldAliases', {'FID': 'FID', 'AZBound': 'AZBound', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_USCensusTractsPopulationEstimates20142018_2.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'Tract Number', 'popE': 'Tract Population Estimate', });
lyr_TribalLands_3.set('fieldAliases', {'LARID': 'LARID', 'LARName': 'Tribal Land', 'GISAcres': 'GISAcres', 'Classifica': 'Classification', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_IncorporatedCityBoundaries_4.set('fieldAliases', {'FID': 'FID', 'Name': 'City', 'POP': 'POP', 'POPDATE': 'POPDATE', 'PCT_CHG': 'PCT_CHG', 'POP2018': 'POP2018', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_ArizonaStateBoundary_1.set('fieldImages', {'FID': 'Range', 'AZBound': 'Range', 'GlobalID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_USCensusTractsPopulationEstimates20142018_2.set('fieldImages', {'GEOID': 'Hidden', 'NAME': 'TextEdit', 'popE': 'TextEdit', });
lyr_TribalLands_3.set('fieldImages', {'LARID': 'Hidden', 'LARName': 'TextEdit', 'GISAcres': 'Hidden', 'Classifica': 'Hidden', 'Shape_STAr': 'Hidden', 'Shape_STLe': 'Hidden', });
lyr_IncorporatedCityBoundaries_4.set('fieldImages', {'FID': 'Hidden', 'Name': 'TextEdit', 'POP': 'Hidden', 'POPDATE': 'Hidden', 'PCT_CHG': 'Hidden', 'POP2018': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', });
lyr_ArizonaStateBoundary_1.set('fieldLabels', {'FID': 'no label', 'AZBound': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_USCensusTractsPopulationEstimates20142018_2.set('fieldLabels', {'NAME': 'header label', 'popE': 'inline label', });
lyr_TribalLands_3.set('fieldLabels', {'LARName': 'inline label', });
lyr_IncorporatedCityBoundaries_4.set('fieldLabels', {'Name': 'header label', });
lyr_IncorporatedCityBoundaries_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});