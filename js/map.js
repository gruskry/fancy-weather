function success(pos) {
  document.querySelector('.searchButton').textContent = 'Search';
  const crd = pos.coords;

  mapboxgl.accessToken = 'pk.eyJ1IjoiZ3J1c2tyeSIsImEiOiJja2Ftcnk0aDIwN2FxMnFxb3RmYno0dm12In0.yN2eZAMUrNqaLF0PJ8dVSQ';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [`${crd.longitude}`, `${crd.latitude}`],
    zoom: 9
  });

  return map;
}

navigator.geolocation.getCurrentPosition(success);
