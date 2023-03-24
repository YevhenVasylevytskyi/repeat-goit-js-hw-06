const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const letters = [];

inputEl.addEventListener('input', onChangeName);


function onChangeName(event) {
  if (event.data === null) {
    letters.pop();
    outputEl.textContent = letters.join('');
  }    
  else 
    letters.push(event.data)
    outputEl.textContent = letters.join('');
        
    if (letters.length === 0) {
      outputEl.textContent = 'Anonymous';
    }    
};