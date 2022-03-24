// DOM Manipulation
import { Translator } from './translator.js';
import { binary } from './binary.js';

const userInput = document.querySelector('#morse-input');
const translateBtn = document.querySelector('.btn-translate');
const output = document.querySelector("#morse-output");
console.log(output);

console.log(userInput, translateBtn)

const translator = new Translator(binary);

translateBtn.addEventListener('click', () => {
    output.value = translator.translateInput(userInput.value)

});
