'use strict';

const numbers = [];

while (true) {
  const num = Number(prompt("Enter a number:"));
  if (numbers.includes(num)) {
    console.log(`Number ${num} has already given!`);
    break;
  }
  numbers.push(num);
}

numbers.sort((a, b) => a - b);
console.log("All numbers in ascending order:");
numbers.forEach(n => console.log(n));