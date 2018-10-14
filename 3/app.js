var input = document.querySelector('input');

let state = {};

function getInput(){
  state.search = new Search(input.value);
  state.search.getData();
  clearInput();
  recipesHtml.innerHTML = '<p> Wait for loading...</p>';
};

function clearInput(){
  input.value = '';
}


input.addEventListener('change', getInput);
