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

    function getBooks() {
        fetch(`https://litconnect.stu.nighthawkcodingsociety.com/booking/api/book?genre=${genre}`, {
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
                    showUpdateForm(bookId);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
    }

    function addBook(event) {
        event.preventDefault();
        const title = document.getElementById('titleInput').value;
        const author = document.getElementById('authorInput').value;
        const genre = document.getElementById('genreInput').value;

        fetch(`https://litconnect.stu.nighthawkcodingsociety.com/booking/api/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, genre })
        })
        .then(response => response.json())
        .then(data => {
            const resultContainer = document.getElementById('resultContainer');
            if (data) {
                resultContainer.innerHTML = `<p>Book added successfully: ${data.title}</p>`;
                getBooks(); // Refresh the book list
            }
        })
        .catch(error => {
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = `<p>Error adding book: ${error.message}</p>`;
        });
    }

    function deleteBook(bookId) {
        fetch(`https://litconnect.stu.nighthawkcodingsociety.com/booking/api/book/${bookId}`, {
            method: 'DELETE',
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
            const resultContainer = document.getElementById('resultContainer');
            if (data) {
                resultContainer.innerHTML = `<p>Book deleted successfully</p>`;
                getBooks(); // Refresh the book list
            }
        })
        .catch(error => {
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = `<p>Error deleting book: ${error.message}</p>`;
        });
    }

    function showUpdateForm(bookId) {
        const updateFormContainer = document.getElementById('updateFormContainer');
        updateFormContainer.style.display = 'block';
        updateFormContainer.dataset.bookId = bookId;
    }

    function updateBook() {
        const bookId = document.getElementById('updateFormContainer').dataset.bookId;
        const newTitle = document.getElementById('newTitleInput').value;
        if (newTitle) {
            fetch(`https://litconnect.stu.nighthawkcodingsociety.com/booking/api/book/${bookId}`, {
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
                    getBooks(); // Refresh the book list
                }
            })
            .catch(error => {
                const resultContainer = document.getElementById('resultContainer');
                resultContainer.innerHTML = `<p>Error updating book: ${error.message}</p>`;
            });
        }
    }

    addBookForm.addEventListener('submit', addBook);
    getBooks();
});
</script>

<div id="resultContainer"></div>
<div id="updateFormContainer" style="display:none;">
    <input type="text" id="newTitleInput" placeholder="Enter new title for the book">
    <button onclick="updateBook()">Submit</button>
</div>
<div id="recommendations-container"></div>
<form id="add-book-form">
    <input type="text" id="titleInput" placeholder="Title">
    <input type="text" id="authorInput" placeholder="Author">
    <input type="text" id="genreInput" placeholder="Genre">
    <button type="submit">Add Book</button>
</form>     })
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Recommendations</title>
</head>
<body>
    <div id="resultContainer"></div>
    <button id="updateBookButton" onclick="showUpdateForm('bookId')">Update Book</button>
    <div id="updateFormContainer" style="display:none;">
        <input type="text" id="newTitleInput" placeholder="Enter new title for the book">
        <button onclick="updateBook('bookId')">Submit</button>
    </div>



    
</html>