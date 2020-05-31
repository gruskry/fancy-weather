const searchButton = document.querySelector('.searchButton');
const keyWord = document.querySelector('.keyWord');


searchButton.addEventListener("click", function s() {
  function searchWord() {
    return keyWord.value.split(' ').join('-').trim();
  }
  
  const value = searchWord();
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=10d9ff445d2c44ecaff9cd7d787ed556&pretty=1&no_annotations=1`;

  fetch(url)
  .then(res => res.json())
  .then(data => {
    const lat = data.results[0].geometry.lat;
    const long = data.results[0].geometry.lng;
    document.querySelector('.searchButton').textContent = 'Search';

    function success() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZ3J1c2tyeSIsImEiOiJja2Ftcnk0aDIwN2FxMnFxb3RmYno0dm12In0.yN2eZAMUrNqaLF0PJ8dVSQ';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [`${long}`, `${lat}`],
        zoom: 9
      });

      return map;
    }
    navigator.geolocation.getCurrentPosition(success);

    const degr = Math.trunc(`${lat}`);
    const min = Math.ceil((`${lat}` % Math.trunc(`${lat}`)) * 60);
    const newGeo =  `${degr}°${min}'`;
    document.querySelector('.latitude').textContent = `Latitude: ${newGeo}`;

    const degr2 = Math.trunc(`${long}`);
    const min2 = Math.ceil((`${long}` % Math.trunc(`${long}`)) * 60);
    const newGeo2 =  `${degr2}°${min2}'`;
    document.querySelector('.longitude').textContent = `Longitude: ${newGeo2}`;
    
    const urlCity = `https://api.weatherapi.com/v1/forecast.json?key=8d8cf13a4b0d437288b164725202605&q=${data.results[0].components.state}&days=5`;

    fetch(urlCity, {
      method: 'GET'
    }).then(function(response) {
      response.json().then(function(data) {
        
        const humid = data.current.humidity;
        const summary = data.current.condition.text;
        const windSpeed = data.current.wind_kph;
        const tempDays = data.forecast.forecastday;
        
        let feelsLike, temp, tempFirstDay, tempSecondDay, tempThirdDay;
        const celsius = document.querySelector('.celsius');
        if (celsius.classList.contains('active')) {
          feelsLike = data.current.feelslike_c;
          temp = data.current.temp_c;
          tempFirstDay = Math.round((tempDays[0].day.maxtemp_c + tempDays[0].day.mintemp_c) / 2);
          tempSecondDay = Math.round((tempDays[1].day.maxtemp_c + tempDays[1].day.mintemp_c) / 2);
          tempThirdDay = Math.round((tempDays[2].day.maxtemp_c + tempDays[2].day.mintemp_c) / 2);
        } else {
          feelsLike = Math.round(data.current.feelslike_f);
          temp = Math.round(data.current.temp_f);
          tempFirstDay = Math.round((tempDays[0].day.mintemp_f + tempDays[0].day.mintemp_f) / 2);
          tempSecondDay = Math.round((tempDays[1].day.mintemp_f + tempDays[1].day.mintemp_f) / 2);
          tempThirdDay = Math.round((tempDays[2].day.mintemp_f + tempDays[2].day.mintemp_f) / 2);
        }

        localStorage.setItem("temperature", temp);
        document.querySelector('.temp').textContent = `${temp}°`;
        document.querySelector('.humidity').textContent = `Humidity: ${humid}%`;
        document.querySelector('.overcast').textContent = `${summary}`;
        document.querySelector('.feelsLike').textContent = `Feels like: ${feelsLike}°`;
        document.querySelector('.wind').textContent = `Wind: ${windSpeed} m/s`;

        document.querySelector('.tempFirstDay .tempDay').textContent = `${tempFirstDay}°`;
        document.querySelector('.tempSecondDay .tempDay').textContent = `${tempSecondDay}°`;
        document.querySelector('.tempThirdDay .tempDay').textContent = `${tempThirdDay}°`;

        const iconFirst = tempDays[0].day.condition.icon;
        const iconSecond = tempDays[1].day.condition.icon;
        const iconThird = tempDays[2].day.condition.icon;
        const iconCurrent = data.current.condition.icon;

        const tempFirstDayIcon = document.querySelector('#tempFirstDay');
        const tempSecondDayIcon = document.querySelector('#tempSecondDay');
        const tempThirdDayIcon = document.querySelector('#tempThirdDay');
        const tempCurrentDayIcon = document.querySelector('#iconClouds');
        
        tempCurrentDayIcon.setAttribute('src',iconCurrent);
        tempFirstDayIcon.setAttribute('src',iconFirst);
        tempSecondDayIcon.setAttribute('src',iconSecond);
        tempThirdDayIcon.setAttribute('src',iconThird);
      });
    })
  })
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (keyWord.value.length === 0) {
      alert('Search field is empty');
    } else {
      if (/[A-Z]{1}[a-z' -]+/.test(keyWord.value) === false) {
        alert("City name must begin with a capital letter & on English")
      } else { 
        const celsius = document.querySelector('.celsius');

        function searchWord() {
          return keyWord.value.split(' ').join('-').trim();
        }
        
        const value = searchWord();
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=10d9ff445d2c44ecaff9cd7d787ed556&pretty=1&no_annotations=1`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
          const lat = data.results[0].geometry.lat;
          const long = data.results[0].geometry.lng;

          document.querySelector('.searchButton').textContent = 'Search';

          function success() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiZ3J1c2tyeSIsImEiOiJja2Ftcnk0aDIwN2FxMnFxb3RmYno0dm12In0.yN2eZAMUrNqaLF0PJ8dVSQ';
            const map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v9',
              center: [`${long}`, `${lat}`],
              zoom: 9
            });

            return map;
          }
          navigator.geolocation.getCurrentPosition(success);

          const degr = Math.trunc(`${lat}`);
          const min = Math.ceil((`${lat}` % Math.trunc(`${lat}`)) * 60);
          const newGeo =  `${degr}°${min}'`;
          document.querySelector('.latitude').textContent = `Latitude: ${newGeo}`;

          const degr2 = Math.trunc(`${long}`);
          const min2 = Math.ceil((`${long}` % Math.trunc(`${long}`)) * 60);
          const newGeo2 =  `${degr2}°${min2}'`;
          document.querySelector('.longitude').textContent = `Longitude: ${newGeo2}`;
          
          const urlCity = `https://api.weatherapi.com/v1/forecast.json?key=8d8cf13a4b0d437288b164725202605&q=${data.results[0].components.state}&days=5`;

          fetch(urlCity, {
            method: 'GET'
          }).then(function(response) {
            response.json().then(function(data) {
              
              const humid = data.current.humidity;
              const summary = data.current.condition.text;
              const windSpeed = data.current.wind_kph;
              const tempDays = data.forecast.forecastday;
              
              let feelsLike, temp, tempFirstDay, tempSecondDay, tempThirdDay;
              const celsius = document.querySelector('.celsius');
              if (celsius.classList.contains('active')) {
                feelsLike = data.current.feelslike_c;
                temp = data.current.temp_c;
                tempFirstDay = Math.round((tempDays[0].day.maxtemp_c + tempDays[0].day.mintemp_c) / 2);
                tempSecondDay = Math.round((tempDays[1].day.maxtemp_c + tempDays[1].day.mintemp_c) / 2);
                tempThirdDay = Math.round((tempDays[2].day.maxtemp_c + tempDays[2].day.mintemp_c) / 2);
              } else {
                feelsLike = Math.round(data.current.feelslike_f);
                temp = Math.round(data.current.temp_f);
                tempFirstDay = Math.round((tempDays[0].day.mintemp_f + tempDays[0].day.mintemp_f) / 2);
                tempSecondDay = Math.round((tempDays[1].day.mintemp_f + tempDays[1].day.mintemp_f) / 2);
                tempThirdDay = Math.round((tempDays[2].day.mintemp_f + tempDays[2].day.mintemp_f) / 2);
              }

              localStorage.setItem("temperature", temp);
              document.querySelector('.temp').textContent = `${temp}°`;
              document.querySelector('.humidity').textContent = `Humidity: ${humid}%`;
              document.querySelector('.overcast').textContent = `${summary}`;
              document.querySelector('.feelsLike').textContent = `Feels like: ${feelsLike}°`;
              document.querySelector('.wind').textContent = `Wind: ${windSpeed} m/s`;

              document.querySelector('.tempFirstDay .tempDay').textContent = `${tempFirstDay}°`;
              document.querySelector('.tempSecondDay .tempDay').textContent = `${tempSecondDay}°`;
              document.querySelector('.tempThirdDay .tempDay').textContent = `${tempThirdDay}°`;

              const iconFirst = tempDays[0].day.condition.icon;
              const iconSecond = tempDays[1].day.condition.icon;
              const iconThird = tempDays[2].day.condition.icon;
              const iconCurrent = data.current.condition.icon;

              const tempFirstDayIcon = document.querySelector('#tempFirstDay');
              const tempSecondDayIcon = document.querySelector('#tempSecondDay');
              const tempThirdDayIcon = document.querySelector('#tempThirdDay');
              const tempCurrentDayIcon = document.querySelector('#iconClouds');
              
              tempCurrentDayIcon.setAttribute('src',iconCurrent);
              tempFirstDayIcon.setAttribute('src',iconFirst);
              tempSecondDayIcon.setAttribute('src',iconSecond);
              tempThirdDayIcon.setAttribute('src',iconThird);
            });
          })
        })
      }
    }
  }
})