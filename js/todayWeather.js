export default function getLoc () {
  const urlLoc = 'https://ipinfo.io/json?token=e392d1aca1c739';

  fetch(urlLoc)
  .then(res => res.json())
  .then(data => {
    function getCurrentWeather() {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=8d8cf13a4b0d437288b164725202605&q=${data.city}&days=5`;
      fetch(url, {
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
          localStorage.setItem("CurrentTemperature", temp);
          
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
    }
    getCurrentWeather();
  })
}
getLoc();