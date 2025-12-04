'use strict';

const form = document.querySelector("form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const query = document.getElementById("query").value.trim();

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("Search results:", data);

        data.forEach(item => {
            console.log("Show:", item.show.name);
        });

    } catch (error) {
        console.error("Error:", error);
    }
});
