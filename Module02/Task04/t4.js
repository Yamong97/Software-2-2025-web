'use strict';

const numbers = [];

let input = Number(prompt("Enter a number; 0 to stop: "));

while (input !== 0) {
  numbers.push(input);
  input = Number(prompt("Enter a number, 0 to stop: "));
}

numbers.sort((a,b) => b - a);

console.log('Numbers from larget to smallest:');
for (const num of numbers) {
  console.log(num);
}


