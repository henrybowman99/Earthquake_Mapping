console.log("working");


//create tile layer using code provided on leaflet site and assign to variable streets
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//acess  airport GEOJSON URL
//add dark layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };
//create base layer
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})
//Add layers control
L.control.layers(baseMaps).addTo(map);
//airport data

let airportData = "https://raw.githubusercontent.com/henrybowman99/Earthquake_Mapping/main/majorAirports.json";

//add airport data to map
d3.json(airportData).then(function(data) {
    console.log(data);
    L.geoJSON(data).addTo(map);

});

