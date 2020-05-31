export default function getJSON() {
  const refreshBG = document.querySelector('.refreshBG');
  const url = 'https://ipinfo.io/json?token=e392d1aca1c739';
  fetch(url)
  .then(function(response) {
    response.json().then(function(data) {
      const timeZone = data.timezone;
      const date = new Date();

      const formatter = new Intl.DateTimeFormat("en-US", {
          weekday: "short",
          day: "numeric",
          month: "long",
          hour12: "false",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: `${timeZone}`
      })

      const nDate = formatter.format(date);
      const getDateString = nDate.split(', ').join(' ');
      const getDateArray = getDateString.split(' ');

      window.onload = refresh();

      function refresh() {
        const timeOfYear = searchTimeOfYear();
        const timeOfDay = searchTimeOfDay();
        const weather = searchWeather();
        
        const bg = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${timeOfYear},${timeOfDay},${weather}&client_id=aZymTXx459iz1VCkOX9ShgI3UnzisQ0p08COOyDMtaI`;

        function searchTimeOfYear() {
          const getMonth = getDateArray[1];

          if (getMonth === "December" || getMonth === "January" || getMonth === "February") {
            return 'Winter';
          }
          if (getMonth === "March" || getMonth === "April" || getMonth === "May") {
            return 'Spring';
          }
          if (getMonth === "June" || getMonth === "July" || getMonth === "August") {
            return 'Summer';
          }
          if (getMonth === "September" || getMonth === "October" || getMonth === "November") {
            return 'Autumn';
          }
        }

        function searchTimeOfDay () {
          const getHours = getDateArray[3].split(':');
          if (getDateArray[4] === "AM") {
            if (parseInt(getHours[0], 10) > 3 && parseInt(getHours[0], 10) < 13) {
              return "Morning";
            }
            if (parseInt(getHours[0], 10) > -1 && parseInt(getHours[0], 10) < 4) {
              return "Night";
            }
          }
          if (getDateArray[4] === "PM") {
            if (parseInt(getHours[0], 10) > 0 && parseInt(getHours[0], 10) < 5) {
              return "Day";
            }
            if (parseInt(getHours[0], 10) > 4 && parseInt(getHours[0], 10) < 11.5) {
              return "Evening";
            }
          }
        }

        function searchWeather() {
          const currentWeather = document.querySelector('.overcast').textContent;
          return currentWeather.split(' ').join(',');
        }

        fetch(bg, {method: 'GET'})
        .then(function(response) {
          response.json().then(function(data) {
            document.querySelector('.wrapper').style.backgroundImage = `linear-gradient(180deg, rgba(8, 15, 26, 0.747) 0%, rgba(17, 17, 46, 0.671) 100%), url("${data.urls.regular}")`;
          })
        });
      }

      refreshBG.addEventListener("click", function () {refresh()});

    })
  });
}

getJSON();
