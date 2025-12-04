'use strict';

const count = Number(prompt("Number of participants"));
const names = [];

for (let i = 0; i < count; i ++) {
  names.push(prompt(`Name of participant ${i + 1}:`));
}

names.sort();

const list = document.querySelector('#list');
for (const name of names) {
  list.insertAdjacentHTML('beforeend', `<li>${name}</li>`);
}
