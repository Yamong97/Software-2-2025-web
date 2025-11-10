const a =Number(prompt("Enter number1: "))
const b = Number(prompt("Enter number2: "))
const c = Number(prompt("Enter number3: "))

let sum = a + b + c
let product = a * b * c
let average = sum / 3

document.querySelector("#target").innerHTML =
  "The sum of the numbers is: " + sum + "<br>" +
  "The product of the numbers is: " + product + "<br>" +
  "The average of the numbers is: " + average.toFixed(2);

