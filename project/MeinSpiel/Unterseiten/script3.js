var map = L.map('map').setView([48.1609839,14.3393945], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([48.159701311747355, 14.339070075286033]).addTo(map);
 