const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '16px';

inputEl.addEventListener('input', onChangeSize);

function onChangeSize(even) {
  // let factor = inputEl.value
  let factor = even.target.valueAsNumber * 0.32;
    
  textEl.style.fontSize = `${factor}px`;
};