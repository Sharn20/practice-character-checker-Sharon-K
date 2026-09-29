const readline = require ('readline-sync');
let state = readline.question ("Which state do you live in?");
let index = Number (readline.question("Enter index number:"));
let character = state[index];
console.log('The index' + ' ' + index + ' ' + 'is for character' + ' ' + character + '.');