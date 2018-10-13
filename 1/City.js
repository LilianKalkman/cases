(function(global){
  var City = function(query){
    this.query = query;
  }

  City.prototype = {
    getData : function(selectorName, selectorInfo){
      var self = this;
      var q = self.query;

      fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
        .then(function(response){
          return response.json();
        })
        .then(function(data) {
          // takes only the first 30 elements of the data array
          var cities = data.slice(0, 50);
          // creates a new array of only the city names
          var cityArr = cities.map(item => item.city);
          // creates an array of all the items that include the search input
          self.result = cities.filter(place => place.city.includes(`${q}`));
          // console.log(self);
          self.renderCityName(selectorName);
        })
        .then(function(){
          var name = document.querySelectorAll('.city__name');
          self.renderCityInfo(name, selectorInfo);
          console.log(self);
        })
        .catch(function(error){
          console.log(error)
        });
    },

    renderCityName : function(selector){
      for(i = 0; i < this.result.length; i++ ){
        selector.insertAdjacentHTML('beforeend', `<h1 class="city__name"><a href="#">${this.result[i].city}</a></h1>`);
      }
    },

    renderCityInfo : function(selector1, selector2){
      var self = this;
      selector1.forEach(function(element){
        element.addEventListener('click', function(event){
          console.log('clicked');
          var cityname = event.target.innerHTML;
          var index = self.result.findIndex(item => item.city == cityname);
          console.log(index);

          if(self.result.length > 0){
            element.insertAdjacentHTML('beforeend', `
            <p class="city-info">Population : ${self.result[index].population}</p>
            <p class="city-info">Latitude : ${self.result[index].latitude}</p>
            <p class="city-info">Longitude : ${self.result[index].longitude}</p>
            ` );
          } else {
            element.insertAdjacentHTML('beforeend', '<p>Sorry, this city was not found</p>');
          }
      })
    })
  }
}


  global.City = City;


})(this);
