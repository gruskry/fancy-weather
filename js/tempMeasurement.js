const celsius = document.querySelector('.celsius');
const fahrenheit = document.querySelector('.fahrenheit');

fahrenheit.addEventListener("click", function () {
    celsius.classList.remove("active");
    celsius.classList.add("inactive");
    fahrenheit.classList.add("active");
    fahrenheit.classList.remove("inactive");

    const values = document.querySelector('.cityAndCountry').textContent;
    const value = values.split(', ').join(',');
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=10d9ff445d2c44ecaff9cd7d787ed556&pretty=1&no_annotations=1`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=8d8cf13a4b0d437288b164725202605&q=${data.results[0].components.state}&days=5`;
        let feelsLike, temp, tempFirstDay, tempSecondDay, tempThirdDay;
        fetch(url, {
            method: 'GET'
        }).then(function(response) {
            response.json().then(function(data) {
                const tempDays = data.forecast.forecastday;
                
                feelsLike = Math.round(data.current.feelslike_f);
                temp = Math.round(data.current.temp_f);
                tempFirstDay = Math.round((tempDays[0].day.mintemp_f + tempDays[0].day.mintemp_f) / 2);
                tempSecondDay = Math.round((tempDays[1].day.mintemp_f + tempDays[1].day.mintemp_f) / 2);
                tempThirdDay = Math.round((tempDays[2].day.mintemp_f + tempDays[2].day.mintemp_f) / 2);

                document.querySelector('.temp').textContent = `${temp}°`;
                document.querySelector('.feelsLike').textContent = `Feels like: ${feelsLike}°`;
                document.querySelector('.tempFirstDay .tempDay').textContent = `${tempFirstDay}°`;
                document.querySelector('.tempSecondDay .tempDay').textContent = `${tempSecondDay}°`;
                document.querySelector('.tempThirdDay .tempDay').textContent = `${tempThirdDay}°`;
            });
        });
    });
    
})

celsius.addEventListener("click", function () {
    fahrenheit.classList.remove("active");
    fahrenheit.classList.add("inactive");
    celsius.classList.remove("inactive");
    celsius.classList.add("active");

    const values = document.querySelector('.cityAndCountry').textContent;
    const value = values.split(', ').join(',');
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=10d9ff445d2c44ecaff9cd7d787ed556&pretty=1&no_annotations=1`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=8d8cf13a4b0d437288b164725202605&q=${data.results[0].components.state}&days=5`;
        let feelsLike, temp, tempFirstDay, tempSecondDay, tempThirdDay;
        fetch(url, {
            method: 'GET'
        }).then(function(response) {
            response.json().then(function(data) {
                const tempDays = data.forecast.forecastday;
                feelsLike = data.current.feelslike_c;
                temp = data.current.temp_c;
                tempFirstDay = Math.round((tempDays[0].day.maxtemp_c + tempDays[0].day.mintemp_c) / 2);
                tempSecondDay = Math.round((tempDays[1].day.maxtemp_c + tempDays[1].day.mintemp_c) / 2);
                tempThirdDay = Math.round((tempDays[2].day.maxtemp_c + tempDays[2].day.mintemp_c) / 2);

                document.querySelector('.temp').textContent = `${temp}°`;
                document.querySelector('.feelsLike').textContent = `Feels like: ${feelsLike}°`;
                document.querySelector('.tempFirstDay .tempDay').textContent = `${tempFirstDay}°`;
                document.querySelector('.tempSecondDay .tempDay').textContent = `${tempSecondDay}°`;
                document.querySelector('.tempThirdDay .tempDay').textContent = `${tempThirdDay}°`;

            });
        });
    });
})
