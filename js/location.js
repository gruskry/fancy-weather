function getJSON() {
  const url = 'https://ipinfo.io/json?token=98ae5375abde6f';
  fetch(url)
  .then(res => res.json())
  .then(data => {
    function writePlace () {
      const cityAndCountry = document.querySelector('.cityAndCountry');
      const city = data.city;
      const countryCode = data.country;
      const longLat = data.loc.split(',');
      const timeZone = data.timezone;

      const countryUrl = '../assets/countryName.json';
      fetch(countryUrl)
      .then(res => res.json())
      .then(data => {
        const countryName = data[countryCode];
        cityAndCountry.textContent = `${city}, ${countryName}`;

        const long = longLat[1];
        const lat = longLat[0];
        localStorage.setItem("longitude", long);
        localStorage.setItem("latitude", lat);

        const degr = Math.trunc(`${lat}`);
        const min = Math.ceil((`${lat}` % Math.trunc(`${lat}`)) * 60);
        const newGeo =  `${degr}°${min}'`;
        document.querySelector('.latitude').textContent = `Latitude: ${newGeo}`;

        const degr2 = Math.trunc(`${long}`);
        const min2 = Math.ceil((`${long}` % Math.trunc(`${long}`)) * 60);
        const newGeo2 =  `${degr2}°${min2}'`;
        document.querySelector('.longitude').textContent = `Longitude: ${newGeo2}`;

        const dateTime = {
          show: function formatDate(node) {
            setInterval(function n() {
              const date = new Date();
              let lang;
              if (document.querySelector('.bel').classList.contains("active")) {
                lang = 'be';
              }
              if (document.querySelector('.rus').classList.contains("active")) {
                lang = 'ru';
              }
              if (document.querySelector('.eng').classList.contains("active")) {
                lang = 'en';
              }

              const formatter = new Intl.DateTimeFormat(`${lang}`, {
                  weekday: "short",
                  day: "numeric",
                  month: "long",
                  hour12: "false",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: `${timeZone}`
              });
              node.innerHTML = formatter.format(date);
            }, 1000);
          }
        };
            
        const nextWeekDay = {
        show: function day(n, i) {
          setInterval(function() {
            const date = new Date();
            let lang = localStorage.getItem('lang');
            const formatter = new Intl.DateTimeFormat(`${lang}`, {
              weekday: "long",
              timeZone: `${timeZone}`
            });

            if (localStorage.getItem('lang') === "en" || localStorage.getItem('lang') === "EN" ) {
              const weekDays = [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"
              ];
              const ind = weekDays.indexOf(formatter.format(date));
              n.innerHTML = `${weekDays[ind + i]}`;
            }
          }, 1000);
        }
        };
                
        dateTime.show(document.querySelector('.date'));
        nextWeekDay.show(document.querySelector('.firstDayWeather .weekDay'), 1);
        nextWeekDay.show(document.querySelector('.secondDayWeather .weekDay'), 2);
        nextWeekDay.show(document.querySelector('.thirdDayWeather .weekDay'), 3);
      }) 
    }
    writePlace();
  })
}

getJSON();