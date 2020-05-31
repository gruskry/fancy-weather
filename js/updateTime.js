const searchButton = document.querySelector('.searchButton');
const keyWord = document.querySelector('.keyWord');
const searchInput = document.querySelector('.cityAndCountry');
const refreshBG = document.querySelector('.refreshBG');
    

function searchCity() {
  return keyWord.value.split(' ').join('_');
}

function search() {
  document.querySelector('.searchButton').classList.add('active');
  localStorage.setItem('lang', 'en');

  let max_id;
  max_id = setTimeout(function () {});
  while (max_id--) {
    clearTimeout(max_id);
  }
  
  if (document.querySelector('.searchButton').classList.contains('active')) {
    const val = searchCity();
    const url = `../assets/timezone.json`;

    fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        const timeZone = data[val];
        const cityDate = new Date();
        function n() {
          let lang;
          lang = localStorage.getItem('lang');
          if (document.querySelector('.active').classList.contains("bel")) {
            lang = 'be';
          }
          if (document.querySelector('.active').classList.contains("rus")) {
            lang = 'ru';
          }
          if (document.querySelector('.active').classList.contains("eng")) {
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
          })
          return formatter;
        }
      
        const nDate = n().format(cityDate);
        const getDateString = nDate.split(', ').join(' ');
        const getDateArray = getDateString.split(' ');
        const dateTime = {
          show: function formatDate(node) {
            setInterval(function n() {
              const date = new Date();
              let lang;
              lang = localStorage.getItem('lang');
              if (document.querySelector('.active').classList.contains("bel")) {
                lang = 'be';
              }
              if (document.querySelector('.active').classList.contains("rus")) {
                lang = 'ru';
              }
              if (document.querySelector('.active').classList.contains("eng")) {
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
            }, 1500);
          }
        };

        const nextWeekDay = {
          show: function day(n, i) {
            setInterval(function() {
              const date = new Date();
              let lang;
              
              lang = localStorage.getItem('lang');
              const formatter = new Intl.DateTimeFormat(`${lang}`, {
                weekday: "long",
                timeZone: `${timeZone}`
              });
              
              if (localStorage.getItem('lang') === "en" || localStorage.getItem('lang') === "EN") {
                const weekDays = [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"
                ];
                const ind = weekDays.indexOf(formatter.format(date));
                console.log(ind);
                n.innerHTML = `${weekDays[ind + i]}`;
              }

            }, 1000);
          }
        };
        
        dateTime.show(document.querySelector('.date'));
        nextWeekDay.show(document.querySelector('.firstDayWeather .weekDay'), 1);
        nextWeekDay.show(document.querySelector('.secondDayWeather .weekDay'), 2);
        nextWeekDay.show(document.querySelector('.thirdDayWeather .weekDay'), 3);

        window.onload = refresh();
        function refresh() {
          const value = searchWord();
          const timeOfYear = searchTimeOfYear();
          const timeOfDay = searchTimeOfDay();
          const weather = searchWeather();

          const bg = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${timeOfYear},${timeOfDay},${weather}&client_id=aZymTXx459iz1VCkOX9ShgI3UnzisQ0p08COOyDMtaI`;

          function searchWord() {
            return searchInput.textContent.split(', ').join(',').trim();
          }

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
      });
    });
      
  }
}

searchButton.addEventListener("click", () => {
  if (keyWord.value.length === 0) {
    alert('Search field is empty');
  } else {
    if (/[A-Z]{1}[a-z' -]+/.test(keyWord.value) === false) {
      alert("City name must begin with a capital letter & on English")
    } else { search()}
  }
});

keyWord.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (keyWord.value.length === 0) {
      alert('Search field is empty');
    } else {
      if (/[A-Z]{1}[a-z' -]+/.test(keyWord.value) === false) {
        alert("City name must begin with a capital letter & on English")
      } else { search()}
    }
  }
})