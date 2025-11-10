const num_of_Dice = parseInt(prompt("Enter the number of dice: "));
const Sum = parseInt(prompt("Enter the sum of eyes number: "));

const Simulation = 10000;
let count = 0;

for (let i = 0; i < Simulation; i++) {
  let TotalSum = 0;

  for (let j = 0; j < num_of_Dice; j++) {
    TotalSum += Math.floor(Math.random() * 6) + 1;
  }

  if (TotalSum === Sum) {
    count++;
  }
}

const probability = (count / Simulation) * 100;
document.querySelector("#target").innerHTML= `Probability to get sum ${Sum} with ${num_of_Dice} dice is ${probability.toFixed(2)} %.`