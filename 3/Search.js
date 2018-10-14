var recipesHtml = document.querySelector('.recipes');

(function(global){

var Search = function(query){
  this.query = query
};

Search.prototype = {
  getData : function(){
    var self = this;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const apikey = '4b943e043588f1fc8cd5a56a1c23e32c';
    const URL = `${proxy}http://food2fork.com/api/search?key=${apikey}&q=${self.query}`;

    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        self.result = data.recipes;
        console.log(self);
      })
      .then(function(){
        self.renderRecipes(recipesHtml);
      })
      .catch(error => console.log(error))
  },

  renderRecipes : function(selector){
    var self = this;

    var renderArray = self.result.filter(recipe => recipe.title.includes(this.query));

    var html = renderArray.map(item => {
      return `
        <div class='recipe'>
          <h3 class='recipe-title'>${item.title}</h3>
          <img class='recipe-img' src='${item.source_url}' style='width:100px; height: auto;'></img>
        </div>

      `
    }).join('');

    selector.innerHTML = html;
  }

}

global.Search = Search;

})(this);
