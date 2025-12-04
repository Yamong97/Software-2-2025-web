'use strict';

const input = document.querySelector('#calculation');
const startButton = document.querySelector('#start');
const result = document.querySelector('#result');

startButton.addEventListener('click', function() {
  const calculation = input.value.trim(); // get input and remove spaces
  let res;

  if (calculation.includes('+')) {
    const parts = calculation.split('+');
    res = parseInt(parts[0], 10) + parseInt(parts[1], 10);
  } else if (calculation.includes('-')) {
    const parts = calculation.split('-');
    res = parseInt(parts[0], 10) - parseInt(parts[1], 10);
  } else if (calculation.includes('*')) {
    const parts = calculation.split('*');
    res = parseInt(parts[0], 10) * parseInt(parts[1], 10);
  } else if (calculation.includes('/')) {
    const parts = calculation.split('/');
    const divisor = parseInt(parts[1], 10);
    if (divisor === 0) {
      result.textContent = 'Cannot divide by zero!';
      return;
    }
    res = Math.floor(parseInt(parts[0], 10) / divisor); // integer division
  } else {
    result.textContent = 'Invalid input!';
    return;
  }

  result.textContent = `Result: ${res}`;
});
