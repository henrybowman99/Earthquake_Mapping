console.log("working");

//createmap object
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
 //create coordinate for line
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
  

//create a polyline using coordinates
L.polyline(line,{
    color:"yellow"
}).addTo(map);


//create tile layer using code provided on leaflet site and assign to variable streets
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//add streets tile layer to map
streets.addTo(map);

