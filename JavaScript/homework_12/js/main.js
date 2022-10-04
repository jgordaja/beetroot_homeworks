const homeIcon = L.icon({
    iconUrl: './img/home.svg', 
    iconSize:     [38, 95], // size of the icon 
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location 
    popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor 
});

const heartIcon = L.icon({
    iconUrl: './img/heart.svg', 
    iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76], 
}); 

let map = L.map('map').setView([48.745521, 37.588879], 15); // координати центру мапита масштаб

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// точка з фото міста

let pointCity = L.marker([48.738658, 37.584976], {icon: homeIcon}) 
    .addTo(map)
    .bindPopup('Краматорськ')
    .openPopup(); 

const photoCityUrl = 'https://racurs.ua/content/images/Publication/Article/23/99/content/kramatorsk12.png';
const photoCityBounds = [[48.738658, 37.584976], [48.74896, 37.60435]]; 

const photoCity = L.imageOverlay(photoCityUrl, photoCityBounds, {interactive: true}); 

pointCity.on('click', function() {
    photoCity.addTo(map); 
});

pointCity.on('mouseover', function() {
    photoCity.remove(); 
});

// поява вікон з координатами при натисканні на місце на карті

const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Координати точки:" + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick); 

// фото в парку

let pointInPark = L.marker([48.747559, 37.586519], {icon: heartIcon}) 
    .addTo(map);

const photoInParkUrl = './img/photo1.jpg';
const photoInParkBounds = [[48.747559, 37.586519], [48.737682, 37.609666]]; 

const photoInPark = L.imageOverlay(photoInParkUrl, photoInParkBounds, {interactive: true}); 

pointInPark.on('click', function() {
    photoInPark.addTo(map); 
});

pointInPark.on('mouseover', function() {
    photoInPark.remove(); 
});

// фото біля будинку

let pointHome = L.marker([48.750799, 37.596767], {icon: heartIcon}) 
    .addTo(map);

const photoNearHoseUrl = './img/photo2.jpg';
const photoNearHoseBounds = [[48.750799, 37.596767], [48.743795, 37.614628]]; 

const photoNearHose = L.imageOverlay(photoNearHoseUrl, photoNearHoseBounds, {interactive: true}); 

pointHome.on('click', function() {
    photoNearHose.addTo(map); 
});

pointHome.on('mouseover', function() {
    photoNearHose.remove(); 
});

// 1 вересня 1 клас доньки 

let pointSchool = L.marker([48.745054, 37.595408], {icon: heartIcon}) 
    .addTo(map);

const photoSchoolUrl = './img/photo3.jpg';
const photoSchoolBounds = [[48.745054, 37.595408], [48.738814, 37.608733]]; 

const photoSchool = L.imageOverlay(photoSchoolUrl, photoSchoolBounds, {interactive: true}); 

pointSchool.on('click', function() {
    photoSchool.addTo(map); 
});

pointSchool.on('mouseover', function() {
    photoSchool.remove(); 
});