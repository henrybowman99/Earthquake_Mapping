console.log("working");

//createmap object
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//add a circle marker for LA
let marker = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillcolor: '#ffffa1'
}).addTo(map);

//create tile layer using code provided on leaflet site and assign to variable streets
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//add streets tile layer to map
streets.addTo(map);

