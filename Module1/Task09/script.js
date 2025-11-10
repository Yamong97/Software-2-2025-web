const number = parseInt(prompt("Enter an integer: "));

let Prime = true;

if (number <= 1) {
    Prime = false;
}

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        Prime = false;
        break;
    }
}

if (Prime) {
    document.querySelector("#target").innerHTML=`${number} is a prime number.`
} else {
    document.querySelector("#target").innerHTML=`${number} is not a prime number.`
}