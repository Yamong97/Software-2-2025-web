'use strict';

function even(numbers) {
  const evenNumbers = [];
  for (let number of numbers) {
    // check if number is divisble by 2
    // if so, push to evenNumbers
    if (number % 2 === 0){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const allNumbers = [1, 54, 2, 67, 78, 12, 4, 76, 8, 3, 45, 79, 23];

const result = even(allNumbers);

console.log("Original array:", allNumbers.join(', '));
console.log("Even numbers array:", result.join(', '));