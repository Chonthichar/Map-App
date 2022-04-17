'use strict'

// 1.user stories: description base on user's perspective.

//get real time Geolaocagion
// - tracking draw line ans shape line when press
// -press stop and record running boxing /
// -shows distance and time of runing and boxing activity
// -shows mark/time/activity/ data workout on the map
// -map able to move arounds when press blog map zoom in
// -box was kepp in local storage then i can see it everytime
// -delete work out
// -delete  all work out
// -sort workout by running and boxing


// 2.features
//map where user can click to store (get location coordinates)
// - geolocation to display map
// - input makeup distance place
    //- isplay workout in a list
//display workout on the map
//store work out data in local storage and display

// 3.flowchart what we will build

//- page load 1.async get current location coordinates 2.render map on current location - when user press stop on button
//3.render workout form 5.press stop form shows 6. render workout on map 7. render workout in list 7.store workout in local storage
// load workout from local storage
// 4.architecture how we will build

// finally implement of our plans using code


//use Geo location API to track current location

if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(function(pos) {
const {latitude} = pos.coords;
const {longitude} = pos.coords;
console.log(latitude, longitude);
// console.log(`https://www.google.co.th/maps/${latitude},${longitude},17z?hl=th`)

    const point = [latitude, longitude];
    // List the name space for international API

    const map = L.map('map').setView(point, 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.fr/osmfr/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(point).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    
}, function (){
    alert('could not get your position')
})




























