const input = document.querySelector('input');
const recipesDOM = document.querySelector('.recipes');

input.addEventListener('change', function(){
  fetchData(this.value);
});

function fetchData(query){
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const apikey = '4b943e043588f1fc8cd5a56a1c23e32c';
  const URL = `${proxy}http://food2fork.com/api/search?key=${apikey}&q=${query}`;

  let recipes = [];

  fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      recipes = data.recipes;
      console.log(recipes);
      renderData(recipes);
    })
    .catch(error => console.log(error));
}

function renderData(recipes){
  const html = recipes.map(recipe => {
    return `<div>${recipe.title}</div>`;
  }).join('');
  recipesDOM.innerHTML = html;
}
