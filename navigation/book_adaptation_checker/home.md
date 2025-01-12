---
layout: post 
title: Book Adaptation Checker
search_exclude: true
permalink: /bookadaptationchecker
---

<h2>Enter a book below and click "Search" to check if there has been a film adaptation</h2>
<input type="text" id="searchInput" placeholder="Enter book title">
<button id="searchButton">Search</button>

<h2>All Movies</h2>
<button id="getAllMoviesButton">List of Books have Movie Adaptations</button>

<div id="resultContainer"></div>

<script>
    document.getElementById('searchButton').addEventListener('click', async () => {
    const title = document.getElementById('searchInput').value;
    const resultContainer = document.getElementById('resultContainer');
    
    try {
        const response = await fetch(`http://127.0.0.1:5000/movies/search?title=${encodeURIComponent(title)}`);
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Unexpected response format');
        }
        const data = await response.json();

        if (response.ok) {
            resultContainer.innerHTML = `<h3>Found:</h3><p>${data.title}</p>`;
        } else {
            resultContainer.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        resultContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
});

document.getElementById('getAllMoviesButton').addEventListener('click', async () => {
    const resultContainer = document.getElementById('resultContainer');

    try {
        const response = await fetch('http://127.0.0.1:5000/movies');
        const data = await response.json();
        
        resultContainer.innerHTML = '<h3>All Movies:</h3>';
        data.forEach(movie => {
            resultContainer.innerHTML += `<p>${movie.title}</p>`;
        });
    } catch (error) {
        resultContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
});
</script>

