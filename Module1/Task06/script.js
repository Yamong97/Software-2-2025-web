let calculation = confirm ("Should I calculate the square root?")

if (calculation){
  let number = Number(prompt("Enter a number: "))

  if (number < 0) {
    Result = "The square root of a negative number is not defined";

  } else {
    let result = Math.sqrt(number);
    Result = `The square root of ${number} is ${result}.`;
  }
} else {
  Result = "The square root is not calculated.";
}

document.querySelector("#target").innerHTML = Result;