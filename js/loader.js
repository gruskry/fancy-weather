document.onreadystatechange = function() { 
    const rusButton = document.querySelector('.rus');
    const belButton = document.querySelector('.bel');
    const engButton = document.querySelector('.eng');

    if (document.readyState !== "complete") { 
        document.querySelector(".wrapper").style.display = "none"; 
        document.querySelector("#loader").style.display = "block"; 
    } else { 
        
        document.querySelector("#loader").style.display = "none";
        document.querySelector( ".wrapper").style.display = "flex";
        setTimeout(() => {
            if (localStorage.getItem('lang') == 'en') {
                rusButton.classList.remove('active');
                rusButton.classList.add('inactive');
                belButton.classList.remove('active');
                belButton.classList.add('inactive');
                engButton.classList.add('active');
                engButton.classList.remove('inactive');  

                const textContentArray = localStorage.getItem('enTranslate').split('((');

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
            }
    
           if (localStorage.getItem('lang') == 'ru'){
                rusButton.classList.add('active');
                rusButton.classList.remove('inactive');
                belButton.classList.remove('active');
                belButton.classList.add('inactive');
                engButton.classList.remove('active');
                engButton.classList.add('inactive');
            
                const textContentArray = localStorage.getItem('ruTranslate').split('((');

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
            }
    
            if (localStorage.getItem('lang') == 'be'){
                rusButton.classList.remove('active');
                rusButton.classList.add('inactive');
                belButton.classList.add('active');
                belButton.classList.remove('inactive');
                engButton.classList.remove('active');
                engButton.classList.add('inactive');

                const textContentArray = localStorage.getItem('belTranslate').split('((');

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
            
            } 
            document.querySelector("#loader").style.display = "none";
        }, 2000);
        
    } 
};