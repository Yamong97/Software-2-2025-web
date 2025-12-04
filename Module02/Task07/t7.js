'use strict';

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt("How many sides on the dice?"));
let result = 0;

const list = document.querySelector('#rolls');

while (result !== sides) {
  result = rollDice(sides);
  list.insertAdjacentHTML('beforeend', `<li> ${result}</li>`);
}
