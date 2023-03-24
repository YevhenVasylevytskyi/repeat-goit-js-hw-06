const ulElem = Array.from(document.querySelector('#categories').children);

let ulElemLength = ulElem.length 
console.log(`Number of categories: ${ulElemLength}`)

for (let elem of ulElem) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${quantityElem}`);
};