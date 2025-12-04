'use strict';
 const numbers = [];
 for (let i = 0; i<5; i++) {
   const num = Number (prompt(`enter a number ${i +1};`));
   numbers.push(num);
 }

 for (let i = numbers.length -1; i >= 0; i--) {
   console.log(numbers[i]);
 }

 document.body.insertAdjacentHTML('beforeend', '<h2>Reversed numbers:</h2>');
numbers.slice().reverse().forEach(n => {
  document.body.insertAdjacentHTML('beforeend', `<p>${n}</p>`);
});