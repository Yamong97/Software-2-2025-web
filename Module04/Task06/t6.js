'use strict';

const jokeForm = document.querySelector('#joke-form');
const resultsDiv = document.querySelector('#results');

jokeForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    resultsDiv.innerHTML = '';

    const keyword = document.querySelector('input[name=q]').value.trim();
    if (!keyword) return;

    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${keyword}`);
    const data = await response.json();

    if (data.total === 0) {
        resultsDiv.innerHTML = `<p>No jokes found for "${keyword}".</p>`;
        return;
    }

    for (const joke of data.result) {
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.textContent = joke.value;
        article.appendChild(p);
        resultsDiv.appendChild(article);
    }
});
