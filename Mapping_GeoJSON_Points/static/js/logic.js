console.log("working");

//createmap object
let map = L.map('mapid').setView([37.5, -122.5],10);
//create geoJson Data
let SFO = 
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//Add data to map
L.geoJSON(SFO, {
    //add each feature as a marker
    onEachFeature:function(feature, layer){
        console.log(layer);
        layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
    }
}).addTo(map);
//create tile layer using code provided on leaflet site and assign to variable streets
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//add streets tile layer to map
streets.addTo(map);

