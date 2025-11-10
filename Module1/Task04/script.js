'use strict';

const name = prompt('Enter a student\'s name: ');
const room = Math.floor(Math.random() * 4 + 1);

let Hat;

if (room === 1) {
  Hat = 'Gryffindor';
} else if (room === 2) {
  Hat = 'Slytherin';
} else if (room === 3) {
  Hat = 'Hufflepuff,';
} else {
  Hat = 'Ravenclaw';
}

document.querySelector('#target').innerHTML = `${name}, you are ${Hat}.`;
