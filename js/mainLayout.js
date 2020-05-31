const body = document.querySelector('body');
body.className = 'body';

const layout = [
  {
    tagName: 'div',
    appendTo: 'body',
    attributes: {
      className: 'wrapper',
    },
  },
  {
    tagName: 'div',
    appendTo: 'wrapper',
    attributes: {
      className: 'mainLayout',
    },
  },
  {
    tagName: 'div',
    appendTo: 'mainLayout',
    attributes: {
      className: 'weather',
    },
  },
  {
    tagName: 'div',
    appendTo: 'mainLayout',
    attributes: {
      className: 'geolocation',
    },
  },
  {
    tagName: 'section',
    appendTo: 'weather',
    attributes: {
      className: 'controlBlock',
    },
  },
  {
    tagName: 'section',
    appendTo: 'weather',
    attributes: {
      className: 'todayWeather',
    },
  },
  {
    tagName: 'section',
    appendTo: 'weather',
    attributes: {
      className: 'threeDaysWeather',
    },
  },
  {
    tagName: 'div',
    appendTo: 'controlBlock',
    attributes: {
      className: 'control',
    },
  },
  {
    tagName: 'section',
    appendTo: 'controlBlock',
    attributes: {
      className: 'search',
    },
  },
  {
    tagName: 'button',
    appendTo: 'control',
    attributes: {
      className: 'refreshBG'
    },
  },
  {
    tagName: 'img',
    appendTo: 'refreshBG',
    attributes: {
      className: 'reload',
      src: '../assets/images/reload.png',
      alt: 'reload icon'
    },
  },
  {
    tagName: 'section',
    appendTo: 'geolocation',
    attributes: {
      className: 'map',
    },
  },
  {
    tagName: 'div',
    appendTo: 'control',
    attributes: {
      className: 'lang',
    },
  },
  {
    tagName: 'button',
    appendTo: 'lang',
    attributes: {
      className: 'eng active'
    },
  },
  {
    tagName: 'button',
    appendTo: 'lang',
    attributes: {
      className: 'rus inactive'
    },
  },
  {
    tagName: 'button',
    appendTo: 'lang',
    attributes: {
      className: 'bel inactive'
    },
  },
  {
    tagName: 'section',
    appendTo: 'control',
    attributes: {
      className: 'temperature',
    },
  },
  {
    tagName: 'button',
    appendTo: 'temperature',
    attributes: {
      className: 'celsius active'
    },
  },
  {
    tagName: 'button',
    appendTo: 'temperature',
    attributes: {
      className: 'fahrenheit inactive'
    },
  },
  {
    tagName: 'div',
    appendTo: 'search',
    attributes: {
      className: 'searchArea',
    },
  },
  {
    tagName: 'input',
    appendTo: 'searchArea',
    attributes: {
      className: 'keyWord',
      type: 'search',
      placeholder: 'Search city',
    },
  },
  {
    tagName: 'img',
    appendTo: 'searchArea',
    attributes: {
      className: 'voiceIcon',
      src: '../assets/images/voice.png'
    },
  },
  {
    tagName: 'button',
    appendTo: 'search',
    attributes: {
      className: 'searchButton',
    },
  },
  {
    tagName: 'p',
    appendTo: 'todayWeather',
    attributes: {
      className: 'cityAndCountry',
    },
  },
  {
    tagName: 'p',
    appendTo: 'todayWeather',
    attributes: {
      className: 'date',
    },
  },
  {
    tagName: 'div',
    appendTo: 'todayWeather',
    attributes: {
      className: 'currentWeather',
    },
  },
  {
    tagName: 'p',
    appendTo: 'currentWeather',
    attributes: {
      className: 'temp',
    },
  },
  {
    tagName: 'section',
    appendTo: 'currentWeather',
    attributes: {
      className: 'overcastBlock',
    },
  },
  {
    tagName: 'img',
    appendTo: 'overcastBlock',
    attributes: {
      className: 'iconClouds',
      id: "iconClouds",
      width: '100',
      height: '100'
    },
  },
  {
    tagName: 'p',
    appendTo: 'overcastBlock',
    attributes: {
      className: 'overcast',
    },
  },
  {
    tagName: 'p',
    appendTo: 'overcastBlock',
    attributes: {
      className: 'feelsLike',
    },
  },
  {
    tagName: 'p',
    appendTo: 'overcastBlock',
    attributes: {
      className: 'wind',
    },
  },
  {
    tagName: 'p',
    appendTo: 'overcastBlock',
    attributes: {
      className: 'humidity',
    },
  },
  {
    tagName: 'section',
    appendTo: 'threeDaysWeather',
    attributes: {
      className: 'firstDayWeather',
    },
  },
  {
    tagName: 'section',
    appendTo: 'threeDaysWeather',
    attributes: {
      className: 'secondDayWeather',
    },
  },
  {
    tagName: 'section',
    appendTo: 'threeDaysWeather',
    attributes: {
      className: 'thirdDayWeather',
    },
  },
  {
    tagName: 'p',
    appendTo: 'firstDayWeather',
    attributes: {
      className: 'weekDay',
    },
  },
  {
    tagName: 'p',
    appendTo: 'secondDayWeather',
    attributes: {
      className: 'weekDay',
    },
  },
  {
    tagName: 'p',
    appendTo: 'thirdDayWeather',
    attributes: {
      className: 'weekDay',
    },
  },
  {
    tagName: 'div',
    appendTo: 'firstDayWeather',
    attributes: {
      className: 'tempFirstDay',
    },
  },
  {
    tagName: 'div',
    appendTo: 'secondDayWeather',
    attributes: {
      className: 'tempSecondDay',
    },
  },
  {
    tagName: 'div',
    appendTo: 'thirdDayWeather',
    attributes: {
      className: 'tempThirdDay',
    },
  },
  {
    tagName: 'p',
    appendTo: 'tempFirstDay',
    attributes: {
      className: 'tempDay',
    },
  },
  {
    tagName: 'img',
    appendTo: 'tempFirstDay',
    attributes: {
      className: 'icon',
      id: "tempFirstDay",
      width: '50',
      height: '50'
    },
  },
  {
    tagName: 'p',
    appendTo: 'tempSecondDay',
    attributes: {
      className: 'tempDay',
    },
  },
  {
    tagName: 'img',
    appendTo: 'tempSecondDay',
    attributes: {
      className: 'icon',
      id: "tempSecondDay",
      width: '50',
      height: '50'
    },
  },
  {
    tagName: 'p',
    appendTo: 'tempThirdDay',
    attributes: {
      className: 'tempDay',
    },
  },
  {
    tagName: 'img',
    appendTo: 'tempThirdDay',
    attributes: {
      className: 'icon',
      id: "tempThirdDay",
      width: '50',
      height: '50'
    },
  },
  {
    tagName: 'div',
    appendTo: 'map',
    attributes: {
      id: 'map',
      style: 'width: 100%; height: 500px; margin: 20px;',
    },
  },
  {
    tagName: 'p',
    appendTo: 'map',
    attributes: {
      className: 'latitude',
    },
  },
  {
    tagName: 'p',
    appendTo: 'map',
    attributes: {
      className: 'longitude',
    },
  },
  {
    tagName: 'div',
    appendTo: 'body',
    attributes: {
      id: "loader",
      className: 'center',
    },
  },
]

function renderInitialLayout() {
  layout.forEach((elementProps) => {
    const el = document.createElement(elementProps.tagName);

    const attributes = Object.entries(elementProps.attributes);
    attributes.forEach((attribute) => {
      const [key, value] = attribute;
      el[key] = value;
    });

    const appendTo = document.querySelector(`.${elementProps.appendTo}`);
    appendTo.append(el);
  });
}

renderInitialLayout(layout);