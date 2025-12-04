'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const startButton = document.querySelector('#start');
const result = document.querySelector('#result');

startButton.addEventListener('click', function() {
  const val1 = parseFloat(num1.value);
  const val2 = parseFloat(num2.value);
  let Result;

  if (isNaN(val1) || isNaN(val2)) {
    result.textContent = 'Please enter valid numbers!';
    return;
  }

  switch (operation.value) {
    case 'add':
      Result = val1 + val2;
      break;
    case 'sub':
      Result = val1 - val2;
      break;
    case 'multi':
      Result = val1 * val2;
      break;
    case 'div':
      if (val2 === 0) {
        result.textContent = 'Cannot divide by zero!';
        return;
      }
      Result = val1 / val2;
      break;
    default:
      Result = 'Invalid operation';
  }

  result.textContent = `Result: ${Result}`;
});
