
// 1. met de value van de user input moet een query gemaakt worden die naar de api gestuurd wordt om die data te halen

var formInput = document.querySelector('.form-input');
var userInput = document.querySelector('input');
var cityText = document.querySelector('.city');
var cityInfo = document.querySelector('.city__info');
var cityName = document.querySelector('.city__name');

var city;

formInput.addEventListener('submit', function(event){
  event.preventDefault();
  city = new City(userInput.value);
  city.getData(cityText, cityInfo);
});
