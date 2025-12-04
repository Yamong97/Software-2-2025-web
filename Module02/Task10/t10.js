'use strict';

const candidateNum = Number(prompt("Number of candidates:"));
const candidates = [];

for (let i = 0; i < candidateNum; i++) {
  const name = prompt(`Name for candidate ${i + 1}:`);
  candidates.push({ name, votes: 0 });
}

const voterCount = Number(prompt("Number of voters:"));

for (let i = 0; i < voterCount; i++) {
  const vote = prompt(`Voter ${i + 1}, who do you vote for? (leave empty for blank vote)`);

  if (vote === "") continue;

  const candidate = candidates.find(c => c.name === vote);
  if (candidate) {
    candidate.votes++;
  } else {
    console.log(`Invalid vote: ${vote} is not a candidate.`);
  }
}

candidates.sort((a, b) => b.votes - a.votes);

const winnerElem = document.querySelector('#winner');
winnerElem.textContent = `The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`;

const resultsElem = document.querySelector('#results');
for (const c of candidates) {
  resultsElem.insertAdjacentHTML('beforeend', `<li>${c.name}: ${c.votes} votes</li>`);
}
