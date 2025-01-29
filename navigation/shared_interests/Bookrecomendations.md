---
layout: page 
title: Book Reading List
permalink: /bookrecommendations
search_exclude: true
show_reading_time: false 
---
<script>
document.addEventListener('DOMContentLoaded', function() {
    const genre = 'programming'; // Example genre
    const recommendationsContainer = document.getElementById("recommendations-container");
    const addBookForm = document.getElementById("add-book-form");
    const updateBookForm = document.getElementById("update-book-form");

    function fetchBooks() {
        fetch(`http://127.0.0.1:8887/api/book?genre=${genre}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            recommendationsContainer.innerHTML = ''; // Clear any existing content
            data.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <p>${book.genre}</p>
                    <button data-id="${book.id}" class="delete-book">Delete</button>
                    <button data-id="${book.id}" class="edit-book">Edit</button>
                `;
                recommendationsContainer.appendChild(bookElement);
            });

            document.querySelectorAll('.delete-book').forEach(button => {
                button.addEventListener('click', function() {
                    const bookId = this.getAttribute('data-id');
                    deleteBook(bookId);
                });
            });

            document.querySelectorAll('.edit-book').forEach(button => {
                button.addEventListener('click', function() {
                    const bookId = this.getAttribute('data-id');
                    const book = data.find(b => b.id == bookId);
                    document.getElementById('update-book-id').value = book.id;
                    document.getElementById('update-book-title').value = book.title;
                    document.getElementById('update-book-author').value = book.author;
                    document.getElementById('update-book-genre').value = book.genre;
                });
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            recommendationsContainer.innerHTML = '<p>Failed to load book recommendations.</p>';
        });
    }

    function addBook(book) {
        fetch('http://127.0.0.1:8887/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            fetchBooks(); // Refresh the book list
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    function updateBook(book) {
        fetch('http://127.0.0.1:8887/api/book/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            fetchBooks(); // Refresh the book list
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    function deleteBook(bookId) {
        fetch(`http://127.0.0.1:8887/api/book/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchBooks(); // Refresh the book list
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const book = {
            title: document.getElementById('book-title').value,
            author: document.getElementById('book-author').value,
            genre: document.getElementById('book-genre').value
        };
        addBook(book);
    });

    updateBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const book = {
            id: document.getElementById('update-book-id').value,
            title: document.getElementById('update-book-title').value,
            author: document.getElementById('update-book-author').value,
            genre: document.getElementById('update-book-genre').value
        };
        updateBook(book);
    });

    fetchBooks(); // Initial fetch to load books
});
</script>

<div id="recommendations-container">
    <p>Loading book recommendations...</p>
</div>

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

<h2>Update a Book</h2>
<form id="update-book-form">
    <input type="hidden" id="update-book-id" name="id">
    <label for="update-book-title">Title:</label>
    <input type="text" id="update-book-title" name="title" required>
    <br>
    <label for="update-book-author">Author:</label>
    <input type="text" id="update-book-author" name="author" required>
    <br>
    <label for="update-book-genre">Genre:</label>
    <input type="text" id="update-book-genre" name="genre" required>
    <br>
    <button type="submit">Update Book</button>
</form>