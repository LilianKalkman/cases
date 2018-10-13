
function fetchWeather(query){
  fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/search/?query=${query}`, { mode: "no-cors"})
    .then(function(response) {
      return response.json()
    })
    .then(function(data){
      // fetch new data with data.woeid as query
    });
}
