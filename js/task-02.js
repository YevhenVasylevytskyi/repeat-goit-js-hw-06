const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const makeListIngredients = ingredient => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.classList.add('item')
    liEl.textContent = ingredient

    return liEl;
  });
};

const elements = makeListIngredients(ingredients);
list.append(...elements);
