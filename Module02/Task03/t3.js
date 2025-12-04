'use strict';

const dogs = [];
for (let i = 0; i < 6; i ++) {
  dogs.push(prompt(`Dog name ${i + 1}:`));
}

dogs.sort().reverse();

const list = document.querySelector('#dogs');
for (const dog of dogs) {
  list.insertAdjacentHTML('beforeend', `<li>${dog}</li>`);
}