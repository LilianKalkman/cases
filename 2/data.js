var state;
var productsHtml = document.querySelector('.products');

var getData = function(){
  fetch('https://website-krien.firebaseio.com/products.json')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      state = data;
      console.log(state);
      // functie callen
      renderDataTwo(state);
      renderPrice(state);
    })
    .catch(function(error){
      console.log(error)
    });
}

















var data = {
  product5 : {
    name: 'posted product',
    img: 'not available'
  }
}

  var postData = function(data){
    fetch('https://website-krien.firebaseio.com/products.json', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function(response){
      return response.json()
    })
    .then(function(res){
      console.log(res);
    })
    .catch(function(err){
      console.log(err);
    })
  }
