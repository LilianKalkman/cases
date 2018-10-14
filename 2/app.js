
  getData();

  function renderDataTwo(data){
    var stateArray = Object.keys(data);
    var newArr = stateArray.map(item => {
      return data[item];
    });
    var html = newArr.map(item => {
      return `
        <h1>${item.name}</h1>
        <img src=${item.image} style='width:100px; height: auto;'></img>
      `
    }).join('');
    productsHtml.innerHTML = html;
  };


  function renderData(data){
    var stateArray = Object.keys(data);
    console.log(stateArray);

    for(var i = 0; i < stateArray.length; i++){
      // create new image tag and append to div
      var img = document.createElement('img');
      img.src = `${data[stateArray[i]].image}`;
      img.style = 'width: 100px; height: 100px';
      productsHtml.appendChild(img);

      // create new heading and append to same div
      var h1 = document.createElement('h1');
      h1.innerHTML = data[stateArray[i]].name;
      productsHtml.appendChild(h1);
    }
  };

  function renderPrice(data){
    var products = document.querySelectorAll('h1');
    var stateArray = Object.keys(data);
    var newArr = stateArray.map(item => {
      return data[item];
    });
    console.log(newArr);

    products.forEach(function(product){
      product.addEventListener('click', function(e){
        var name = this.innerHTML;
        var index = newArr.findIndex(item => item.name == name);
        var p = document.createElement('p');
        p.innerHTML = `Price: ${newArr[index].price}`;
        p.classList.add('price');
        this.appendChild(p);
      })
    })
  };
