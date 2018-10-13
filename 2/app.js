
  getData();


  var image = document.querySelector('.product__img');

  function renderData(data){

    var stateArray = Object.keys(data);
    console.log(stateArray);

    for(var i = 0; i < stateArray.length; i++){
      productsHtml.insertAdjacentHTML('beforeend', data[stateArray[i]].name);
      image.src = `${data[stateArray[i]].image}`;
    }
  }
