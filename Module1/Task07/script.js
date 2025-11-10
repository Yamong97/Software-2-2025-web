let num_of_dice = Number(prompt('Enter the number of dice rolls: '));

let sum = 0;

for (let i = 1; i <= num_of_dice; i++) {
  let roll = Math.floor(Math.random() * 6) + 1;
  sum += roll;
}

document.querySelector(
    '#target').innerHTML = `User rolled ${num_of_dice} dice. The sum of the result is ${sum}.`;