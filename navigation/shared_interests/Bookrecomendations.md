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

    function fetchBooks() {
        fetch(`https://litconnect.stu.nighthawkcodingsociety.com/book?genre=${genre}`, {
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
                    <button class="update-book" data-id="${book.id}">Update Book</button>
                `;
                recommendationsContainer.appendChild(bookElement);
            });

            document.querySelectorAll('.delete-book').forEach(button => {
                button.addEventListener('click', function() {
                    const bookId = this.getAttribute('data-id');
                    deleteBook(bookId);
                });
            });

            document.querySelectorAll('.update-book').forEach(button => {
                button.addEventListener('click', function() {
                    const bookId = this.getAttribute('data-id');
                    const updatedBook = {
                        title: 'New Title', // Replace with actual title
                        author: 'New Author', // Replace with actual author
                        genre: 'New Genre' // Replace with actual genre
                    };

                    fetch(`https://litconnect.stu.nighthawkcodingsociety.com/book/${bookId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedBook)
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.error) {
                            console.error('Error:', data.error);
                        } else {
                            console.log('Success:', data);
                        }
                    })
                    .catch(error => {
                        console.error('There was a problem with the fetch operation:', error);
                    });
                });
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            recommendationsContainer.innerHTML = '<p>Failed to load book recommendations.</p>';
        });
    }

    function addBook(book) {
        fetch('https://litconnect.stu.nighthawkcodingsociety.com/book', {
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

    function deleteBook(bookId) {
        fetch(`https://litconnect.stu.nighthawkcodingsociety.com/book${bookId}`, {
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

    fetchBooks(); // Initial fetch to load books

    document.getElementById('updateBookButton').addEventListener('click', () => {
        const bookId = prompt("Enter the ID of the book you want to update:");
        if (bookId) {
            updateBook(bookId);
        }
    });
});

 function updateBook(bookId) {
        const newTitle = prompt("Enter new title for the book:");
        if (newTitle) {
            fetch(`${pythonURI}/api/book/${bookId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTitle })
            })
            .then(response => response.json())
            .then(data => {
                const resultContainer = document.getElementById('resultContainer');
                if (data) {
                    resultContainer.innerHTML = `<p>Book updated successfully: ${data.title}</p>`;
                    document.getElementById('getAllBooksButton').click(); // Refresh the book list
                }
            })
            .catch(error => {
                const resultContainer = document.getElementById('resultContainer');
                resultContainer.innerHTML = `<p>Error updating book: ${error.message}</p>`;
            });
        }
    }

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