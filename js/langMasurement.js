const rusButton = document.querySelector('.rus');
const belButton = document.querySelector('.bel');
const engButton = document.querySelector('.eng');


rusButton.addEventListener('click', function () {
    rusButton.classList.add('active');
    rusButton.classList.remove('inactive');
    belButton.classList.remove('active');
    belButton.classList.add('inactive');
    engButton.classList.remove('active');
    engButton.classList.add('inactive');

    const cityAndCountry = document.querySelector('.cityAndCountry').textContent;
    const date = document.querySelector('.date').textContent;
    const overcast = document.querySelector('.overcast').textContent;
    const feelsLike = document.querySelector('.feelsLike').textContent;
    const wind = document.querySelector('.wind').textContent;
    const humid = document.querySelector('.humidity').textContent;
    const inputValue = document.querySelector('.keyWord').placeholder;
    const textButton = document.querySelector('.searchButton').textContent;
    const lat = document.querySelector('.latitude').textContent;
    const long = document.querySelector('.longitude').textContent;
    const dayFirst = document.querySelector('.firstDayWeather .weekDay').textContent;
    const daySecond = document.querySelector('.secondDayWeather .weekDay').textContent;
    const dayThird = document.querySelector('.thirdDayWeather .weekDay').textContent;

    const text = `${cityAndCountry}((${date}((${overcast}((${feelsLike}((${wind}((${humid}((${inputValue}((${textButton}((${lat}((${long}((${dayFirst}((${daySecond}((${dayThird}`;

    const lang = 'ru';
    localStorage.setItem('lang', lang);

    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191214T090320Z.686d6f9617c1e38c.104f143c88d6a858ccad798f34dce4223d1ad973&text=${text}&lang=${lang}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const textContentArray = data.text[0].split('((');
        localStorage.setItem('ruTranslate', data.text[0]);

        document.querySelector('.cityAndCountry').textContent = textContentArray[0];
        document.querySelector('.date').textContent = textContentArray[1];
        document.querySelector('.overcast').textContent = textContentArray[2];
        document.querySelector('.feelsLike').textContent = textContentArray[3];
        document.querySelector('.wind').textContent = textContentArray[4];
        document.querySelector('.humidity').textContent = textContentArray[5];
        document.querySelector('.keyWord').placeholder = textContentArray[6];
        document.querySelector('.searchButton').textContent = textContentArray[7];
        document.querySelector('.latitude').textContent = textContentArray[8];
        document.querySelector('.longitude').textContent = textContentArray[9];
        document.querySelector('.firstDayWeather .weekDay').textContent = textContentArray[10];
        document.querySelector('.secondDayWeather .weekDay').textContent = textContentArray[11];
        document.querySelector('.thirdDayWeather .weekDay').textContent = textContentArray[12];
    })
    
})

belButton.addEventListener('click', function () {
    rusButton.classList.remove('active');
    rusButton.classList.add('inactive');
    belButton.classList.add('active');
    belButton.classList.remove('inactive');
    engButton.classList.remove('active');
    engButton.classList.add('inactive');

    const cityAndCountry = document.querySelector('.cityAndCountry').textContent;
    const date = document.querySelector('.date').textContent;
    const overcast = document.querySelector('.overcast').textContent;
    const feelsLike = document.querySelector('.feelsLike').textContent;
    const wind = document.querySelector('.wind').textContent;
    const humid = document.querySelector('.humidity').textContent;
    const inputValue = document.querySelector('.keyWord').placeholder;
    const textButton = document.querySelector('.searchButton').textContent;
    const lat = document.querySelector('.latitude').textContent;
    const long = document.querySelector('.longitude').textContent;
    const dayFirst = document.querySelector('.firstDayWeather .weekDay').textContent;
    const daySecond = document.querySelector('.secondDayWeather .weekDay').textContent;
    const dayThird = document.querySelector('.thirdDayWeather .weekDay').textContent;

    const text = `${cityAndCountry}((${date}((${overcast}((${feelsLike}((${wind}((${humid}((${inputValue}((${textButton}((${lat}((${long}((${dayFirst}((${daySecond}((${dayThird}`;

    const lang = 'be';
    localStorage.setItem('lang', lang);

    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191214T090320Z.686d6f9617c1e38c.104f143c88d6a858ccad798f34dce4223d1ad973&text=${text}&lang=${lang}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const textContentArray = data.text[0].split('((');
        localStorage.setItem('belTranslate', data.text[0]);
        document.querySelector('.cityAndCountry').textContent = textContentArray[0];
        document.querySelector('.date').textContent = textContentArray[1];
        document.querySelector('.overcast').textContent = textContentArray[2];
        document.querySelector('.feelsLike').textContent = textContentArray[3];
        document.querySelector('.wind').textContent = textContentArray[4];
        document.querySelector('.humidity').textContent = textContentArray[5];
        document.querySelector('.keyWord').placeholder = textContentArray[6];
        document.querySelector('.searchButton').textContent = textContentArray[7];
        document.querySelector('.latitude').textContent = textContentArray[8];
        document.querySelector('.longitude').textContent = textContentArray[9];
        document.querySelector('.firstDayWeather .weekDay').textContent = textContentArray[10];
        document.querySelector('.secondDayWeather .weekDay').textContent = textContentArray[11];
        document.querySelector('.thirdDayWeather .weekDay').textContent = textContentArray[12];
    })

})

engButton.addEventListener('click', function () {
    rusButton.classList.remove('active');
    rusButton.classList.add('inactive');
    belButton.classList.remove('active');
    belButton.classList.add('inactive');
    engButton.classList.add('active');
    engButton.classList.remove('inactive');

    const cityAndCountry = document.querySelector('.cityAndCountry').textContent;
    const date = document.querySelector('.date').textContent;
    const overcast = document.querySelector('.overcast').textContent;
    const feelsLike = document.querySelector('.feelsLike').textContent;
    const wind = document.querySelector('.wind').textContent;
    const humid = document.querySelector('.humidity').textContent;
    const inputValue = document.querySelector('.keyWord').placeholder;
    const textButton = document.querySelector('.searchButton').textContent;
    const lat = document.querySelector('.latitude').textContent;
    const long = document.querySelector('.longitude').textContent;
    const dayFirst = document.querySelector('.firstDayWeather .weekDay').textContent;
    const daySecond = document.querySelector('.secondDayWeather .weekDay').textContent;
    const dayThird = document.querySelector('.thirdDayWeather .weekDay').textContent;

    const text = `${cityAndCountry}((${date}((${overcast}((${feelsLike}((${wind}((${humid}((${inputValue}((${textButton}((${lat}((${long}((${dayFirst}((${daySecond}((${dayThird}`;

    const lang = 'en';
    localStorage.setItem('lang', lang);

    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191214T090320Z.686d6f9617c1e38c.104f143c88d6a858ccad798f34dce4223d1ad973&text=${text}&lang=${lang}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const textContentArray = data.text[0].split('((');
        localStorage.setItem('enTranslate', data.text[0]);
        document.querySelector('.cityAndCountry').textContent = textContentArray[0];
        document.querySelector('.date').textContent = textContentArray[1];
        document.querySelector('.overcast').textContent = textContentArray[2];
        document.querySelector('.feelsLike').textContent = textContentArray[3];
        document.querySelector('.wind').textContent = textContentArray[4];
        document.querySelector('.humidity').textContent = textContentArray[5];
        document.querySelector('.keyWord').placeholder = textContentArray[6];
        document.querySelector('.searchButton').textContent = textContentArray[7];
        document.querySelector('.latitude').textContent = textContentArray[8];
        document.querySelector('.longitude').textContent = textContentArray[9];
        document.querySelector('.firstDayWeather .weekDay').textContent = textContentArray[10];
        document.querySelector('.secondDayWeather .weekDay').textContent = textContentArray[11];
        document.querySelector('.thirdDayWeather .weekDay').textContent = textContentArray[12];
    })

});
