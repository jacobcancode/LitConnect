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

    fetch(`http://127.0.0.1:8887/api/books?genre=${genre}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data) // Handle the response data
        recommendationsContainer.innerHTML = ""; // Clear previous recommendations
        data.forEach(book => {
            const bookDiv = document.createElement("div")
            bookDiv.classList.add("book");

            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <button class="delete-book" data-title="${book.title}">Delete</button
            `;
            recommendationsContainer.appendChild(bookDiv);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-book').forEach(button => {
            button.addEventListener('click', function() 
                const title = this.getAttribute('data-title');
                deleteBook(title);
            });
        });
    })
    .catch(error => console.error('Error fetching recommendations:', error));

    // Add book form submission
    const addBookForm = document.getElementById("add-book-form");
    addBookForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        const title = document.getElementById("book-title").value;
        const author = document.getElementById("book-author").value;
        const genre = document.getElementById("book-genre").value;

        const newBook = {
            title,
            author,
            genre
        };

        await addBook(newBook);

        // Clear the form
        addBookForm.reset();

        // Optionally, refresh the recommendations list
        // fetchRecommendations();
    });
});

async function addBook(book) {
    const response = await fetch('http://127.0.0.1:8887/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    const data = await response.json();
    console.log(data);
}

async function deleteBook(title) {
    const response = await fetch(`http://127.0.0.1:8887/api/books?title=${encodeURIComponent(title)}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

    // Optionally, refresh the recommendations list
    // fetchRecommendations();
}
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

<h2>Add a New Book</h2>
<form id="add-book-form">
    <label for="book-title">Title:</label>
    <input type="text" id="book-title" name="title" required>
    <br>
    <label for="book-author">Author:</label>
    <input type="text" id="book-author" name="author" required>
    <br>
    <label for="book-genre">Genre:</label>
    <input type="text" id="book-genre" name="genre" required>
    <br>
    <button type="submit">Add Book</button>
</form>