

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
  
function success(pos) {
    var crd = pos.coords;

    console.log('Ваше текущее метоположение:');
    console.log(`Широта: ${crd.latitude}`);
    console.log(`Долгота: ${crd.longitude}`);
    console.log(`Плюс-минус ${crd.accuracy} метров.`);
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3J1c2tyeSIsImEiOiJja2Ftcnk0aDIwN2FxMnFxb3RmYno0dm12In0.yN2eZAMUrNqaLF0PJ8dVSQ';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [crd.longitude, crd.latitude], // starting position
        zoom: 9 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};
  
  navigator.geolocation.getCurrentPosition(success, error, options);