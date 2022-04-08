var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Street_Centerline_1 = new ol.format.GeoJSON();
var features_Street_Centerline_1 = format_Street_Centerline_1.readFeatures(json_Street_Centerline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Street_Centerline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Street_Centerline_1.addFeatures(features_Street_Centerline_1);
var lyr_Street_Centerline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Street_Centerline_1, 
                style: style_Street_Centerline_1,
                interactive: true,
                title: '<img src="styles/legend/Street_Centerline_1.png" /> Street_Centerline'
            });
var format_cuisine_bubble_tea_amenity_bar_2 = new ol.format.GeoJSON();
var features_cuisine_bubble_tea_amenity_bar_2 = format_cuisine_bubble_tea_amenity_bar_2.readFeatures(json_cuisine_bubble_tea_amenity_bar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuisine_bubble_tea_amenity_bar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuisine_bubble_tea_amenity_bar_2.addFeatures(features_cuisine_bubble_tea_amenity_bar_2);
var lyr_cuisine_bubble_tea_amenity_bar_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuisine_bubble_tea_amenity_bar_2, 
                style: style_cuisine_bubble_tea_amenity_bar_2,
                interactive: true,
                title: '<img src="styles/legend/cuisine_bubble_tea_amenity_bar_2.png" /> cuisine_bubble_tea_amenity_bar'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Street_Centerline_1.setVisible(true);lyr_cuisine_bubble_tea_amenity_bar_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Street_Centerline_1,lyr_cuisine_bubble_tea_amenity_bar_2];
lyr_Street_Centerline_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SEGMENTID': 'SEGMENTID', 'FULLNAME': 'FULLNAME', 'RECLENGTH': 'RECLENGTH', 'OLDID': 'OLDID', 'PMPID': 'PMPID', 'COMMENTS': 'COMMENTS', 'ADDRESSED': 'ADDRESSED', 'PRE_DIR': 'PRE_DIR', 'ST_NAME': 'ST_NAME', 'ST_TYPE': 'ST_TYPE', 'LADD_FROM': 'LADD_FROM', 'RADD_FROM': 'RADD_FROM', 'LADD_TO': 'LADD_TO', 'RADD_TO': 'RADD_TO', 'SUF_DIR': 'SUF_DIR', 'CLASSIFICA': 'CLASSIFICA', 'ROAD_NAME': 'ROAD_NAME', 'NAME_CAPS': 'NAME_CAPS', 'E911Class': 'E911Class', 'MUN_R': 'MUN_R', 'MUN_L': 'MUN_L', 'SegmentID_': 'SegmentID_', 'EDITDATE': 'EDITDATE', 'Join_ID': 'Join_ID', 'MPH': 'MPH', 'Time_': 'Time_', 'Max_Height': 'Max_Height', 'Max_Weight': 'Max_Weight', 'ONEWAY': 'ONEWAY', 'City_R': 'City_R', 'City_L': 'City_L', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'sinuosity': 'sinuosity', 'GlobalID': 'GlobalID', 'map_origin': 'map_origin', 'StreetTo': 'StreetTo', 'StreetFrom': 'StreetFrom', 'CurrentPCI': 'CurrentPCI', 'Shape__Len': 'Shape__Len', });
lyr_cuisine_bubble_tea_amenity_bar_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'min_age': 'min_age', 'wheelchair': 'wheelchair', 'opening_hours': 'opening_hours', 'smoking': 'smoking', 'payment:visa': 'payment:visa', 'payment:mastercard': 'payment:mastercard', 'payment:cash': 'payment:cash', 'outdoor_seating': 'outdoor_seating', 'level': 'level', 'air_conditioning': 'air_conditioning', 'addr:state': 'addr:state', 'website': 'website', 'phone': 'phone', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_Street_Centerline_1.set('fieldImages', {'OBJECTID': '', 'SEGMENTID': '', 'FULLNAME': '', 'RECLENGTH': '', 'OLDID': '', 'PMPID': '', 'COMMENTS': '', 'ADDRESSED': '', 'PRE_DIR': '', 'ST_NAME': '', 'ST_TYPE': '', 'LADD_FROM': '', 'RADD_FROM': '', 'LADD_TO': '', 'RADD_TO': '', 'SUF_DIR': '', 'CLASSIFICA': '', 'ROAD_NAME': '', 'NAME_CAPS': '', 'E911Class': '', 'MUN_R': '', 'MUN_L': '', 'SegmentID_': '', 'EDITDATE': '', 'Join_ID': '', 'MPH': '', 'Time_': '', 'Max_Height': '', 'Max_Weight': '', 'ONEWAY': '', 'City_R': '', 'City_L': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'sinuosity': '', 'GlobalID': '', 'map_origin': '', 'StreetTo': '', 'StreetFrom': '', 'CurrentPCI': '', 'Shape__Len': '', });
lyr_cuisine_bubble_tea_amenity_bar_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'min_age': '', 'wheelchair': '', 'opening_hours': '', 'smoking': '', 'payment:visa': '', 'payment:mastercard': '', 'payment:cash': '', 'outdoor_seating': '', 'level': '', 'air_conditioning': '', 'addr:state': '', 'website': '', 'phone': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_Street_Centerline_1.set('fieldLabels', {'OBJECTID': 'no label', 'SEGMENTID': 'no label', 'FULLNAME': 'no label', 'RECLENGTH': 'no label', 'OLDID': 'no label', 'PMPID': 'no label', 'COMMENTS': 'no label', 'ADDRESSED': 'no label', 'PRE_DIR': 'no label', 'ST_NAME': 'no label', 'ST_TYPE': 'no label', 'LADD_FROM': 'no label', 'RADD_FROM': 'no label', 'LADD_TO': 'no label', 'RADD_TO': 'no label', 'SUF_DIR': 'no label', 'CLASSIFICA': 'no label', 'ROAD_NAME': 'no label', 'NAME_CAPS': 'no label', 'E911Class': 'no label', 'MUN_R': 'no label', 'MUN_L': 'no label', 'SegmentID_': 'no label', 'EDITDATE': 'no label', 'Join_ID': 'no label', 'MPH': 'no label', 'Time_': 'no label', 'Max_Height': 'no label', 'Max_Weight': 'no label', 'ONEWAY': 'no label', 'City_R': 'no label', 'City_L': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'sinuosity': 'no label', 'GlobalID': 'no label', 'map_origin': 'no label', 'StreetTo': 'no label', 'StreetFrom': 'no label', 'CurrentPCI': 'no label', 'Shape__Len': 'no label', });
lyr_cuisine_bubble_tea_amenity_bar_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'min_age': 'no label', 'wheelchair': 'no label', 'opening_hours': 'no label', 'smoking': 'no label', 'payment:visa': 'no label', 'payment:mastercard': 'no label', 'payment:cash': 'no label', 'outdoor_seating': 'no label', 'level': 'no label', 'air_conditioning': 'no label', 'addr:state': 'no label', 'website': 'no label', 'phone': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_cuisine_bubble_tea_amenity_bar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});