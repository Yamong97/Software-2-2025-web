'use strict';

const tvForm = document.querySelector('#tv-form');

tvForm.addEventListener('submit', async function(evt) {
  evt.preventDefault(); // Prevent page reload

  const keyword = document.querySelector('input[name=q]').value;
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`);
  const jsonData = await response.json();
  console.log(jsonData); // Print search results to console
});
