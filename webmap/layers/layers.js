var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SLCO_healthcare_tracts_1 = new ol.format.GeoJSON();
var features_SLCO_healthcare_tracts_1 = format_SLCO_healthcare_tracts_1.readFeatures(json_SLCO_healthcare_tracts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCO_healthcare_tracts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCO_healthcare_tracts_1.addFeatures(features_SLCO_healthcare_tracts_1);
var lyr_SLCO_healthcare_tracts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCO_healthcare_tracts_1, 
                style: style_SLCO_healthcare_tracts_1,
                interactive: true,
    title: 'SLCO_healthcare_tracts<br />\
    <img src="styles/legend/SLCO_healthcare_tracts_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/SLCO_healthcare_tracts_1_1.png" /> 0 - 2<br />\
    <img src="styles/legend/SLCO_healthcare_tracts_1_2.png" /> 2 - 5<br />\
    <img src="styles/legend/SLCO_healthcare_tracts_1_3.png" /> 5 - 10<br />\
    <img src="styles/legend/SLCO_healthcare_tracts_1_4.png" /> 10 - 17<br />'
        });
var format_Hospital_2 = new ol.format.GeoJSON();
var features_Hospital_2 = format_Hospital_2.readFeatures(json_Hospital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_2.addFeatures(features_Hospital_2);
var lyr_Hospital_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospital_2, 
                style: style_Hospital_2,
                interactive: true,
                title: '<img src="styles/legend/Hospital_2.png" /> Hospital'
            });
var format_slco_county_boundary_3 = new ol.format.GeoJSON();
var features_slco_county_boundary_3 = format_slco_county_boundary_3.readFeatures(json_slco_county_boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slco_county_boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slco_county_boundary_3.addFeatures(features_slco_county_boundary_3);
var lyr_slco_county_boundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_slco_county_boundary_3, 
                style: style_slco_county_boundary_3,
                interactive: false,
                title: '<img src="styles/legend/slco_county_boundary_3.png" /> slco_county_boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SLCO_healthcare_tracts_1.setVisible(true);lyr_Hospital_2.setVisible(true);lyr_slco_county_boundary_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SLCO_healthcare_tracts_1,lyr_Hospital_2,lyr_slco_county_boundary_3];
lyr_SLCO_healthcare_tracts_1.set('fieldAliases', {'objectid': 'objectid', 'geoid10': 'geoid10', 'total_count': 'total_count', 'total': 'total', });
lyr_Hospital_2.set('fieldAliases', {'objectid': 'objectid', 'type': 'type', 'hospital_catchment': 'hospital_catchment', });
lyr_slco_county_boundary_3.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'countynbr': 'countynbr', 'entitynbr': 'entitynbr', 'entityyr': 'entityyr', 'name': 'name', 'fips': 'fips', 'stateplane': 'stateplane', 'pop_lastce': 'pop_lastce', 'pop_curres': 'pop_curres', 'globalid': 'globalid', 'fips_str': 'fips_str', 'color4': 'color4', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_SLCO_healthcare_tracts_1.set('fieldImages', {'objectid': 'TextEdit', 'geoid10': 'TextEdit', 'total_count': 'TextEdit', 'total': 'Range', });
lyr_Hospital_2.set('fieldImages', {'objectid': '', 'type': '', 'hospital_catchment': '', });
lyr_slco_county_boundary_3.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'countynbr': 'TextEdit', 'entitynbr': 'TextEdit', 'entityyr': 'TextEdit', 'name': 'TextEdit', 'fips': 'TextEdit', 'stateplane': 'TextEdit', 'pop_lastce': 'TextEdit', 'pop_curres': 'TextEdit', 'globalid': 'TextEdit', 'fips_str': 'TextEdit', 'color4': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_SLCO_healthcare_tracts_1.set('fieldLabels', {'objectid': 'no label', 'geoid10': 'no label', 'total_count': 'no label', 'total': 'no label', });
lyr_Hospital_2.set('fieldLabels', {'objectid': 'no label', 'type': 'no label', 'hospital_catchment': 'no label', });
lyr_slco_county_boundary_3.set('fieldLabels', {'pk': 'inline label', 'objectid': 'inline label', 'countynbr': 'inline label', 'entitynbr': 'inline label', 'entityyr': 'inline label', 'name': 'inline label', 'fips': 'inline label', 'stateplane': 'inline label', 'pop_lastce': 'inline label', 'pop_curres': 'inline label', 'globalid': 'inline label', 'fips_str': 'inline label', 'color4': 'inline label', 'shape_leng': 'inline label', 'shape_area': 'inline label', });
lyr_slco_county_boundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});