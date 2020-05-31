const searchButton = document.querySelector('.searchButton');
const keyWord = document.querySelector('.keyWord');
const cityAndCountry = document.querySelector('.cityAndCountry');

searchButton.addEventListener("click", () => {
  function searchWord() {
    return keyWord.value.split(' ').join('-').trim();
  }
  const value = searchWord();

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=10d9ff445d2c44ecaff9cd7d787ed556&pretty=1&no_annotations=1`;
  
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const countryCode = data.results[0].components.country_code.toUpperCase();

    const newURL = '../assets/countryName.json';
    fetch(newURL)
    .then(res => res.json())
    .then(data => {
      const countryName = data[countryCode];
      cityAndCountry.textContent = `${value}, ${countryName}`;
    });
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
        function searchWord() {
          return keyWord.value.split(' ').join('-').trim();
        }
        const value = searchWord();
      
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=10d9ff445d2c44ecaff9cd7d787ed556&pretty=1&no_annotations=1`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
          const countryCode = data.results[0].components.country_code.toUpperCase();
      
          const newURL = '../assets/countryName.json';
          fetch(newURL)
          .then(res => res.json())
          .then(data => {
            const countryName = data[countryCode];
            cityAndCountry.textContent = `${value}, ${countryName}`;                  
          });
        })
      }
    }
  }
})
