---
layout: page 
title: Book Recommendations
permalink: /bookrecomendations
search_exclude: true
show_reading_time: false 
---

<script>
document.addEventListener('DOMContentLoaded', function() {
    const genre = 'programming'; // Example genre
    const recommendationsContainer = document.getElementById("recommendations-container");

    fetch(`http://127.0.0.1:8887/recommendations?genre=${genre}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Handle the response data
        recommendationsContainer.innerHTML = ""; // Clear previous recommendations
        data.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");

            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
            `;
            recommendationsContainer.appendChild(bookDiv);
        });
    })
    .catch(error => console.error('Error fetching recommendations:', error));
});
</script>

<style>
.book {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    background-color: #f9f9f9;
}
.book h3 {
    margin: 0 0 5px;
    color: #333;
}
.book p {
    margin: 0;
    color: #555;
}
</style>

<div id="recommendations-container"></div>