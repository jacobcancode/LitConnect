---
layout: page 
title: Book Reading List
permalink: /bookrecommendations
search_exclude: true
show_reading_time: false 
---
<script type="module">
import { pythonURI } from "./assets/js/api/config.js"; // Import the URI from the config file

document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = pythonURI;  // Use the imported URI for API calls

    // GET function to fetch books from the database
    function getBooks() {
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => displayBooks(data))
        .catch(error => console.error('Error:', error));
    }

    // Function to display books in the UI
    function displayBooks(books) {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = ''; // Clear the previous list of books
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.textContent = `${book.title} by ${book.author}`;

            // Add Update button
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            updateButton.onclick = () => showUpdateForm(book.id, book.title);

            // Add Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteBook(book.id);

            bookElement.appendChild(updateButton);
            bookElement.appendChild(deleteButton);
            resultContainer.appendChild(bookElement);
        });
    }

    // Show the update form with pre-filled data
    function showUpdateForm(bookId, currentTitle) {
        const updateFormContainer = document.getElementById('updateFormContainer');
        updateFormContainer.style.display = 'block';
        document.getElementById('newTitleInput').value = currentTitle;
        document.getElementById('updateBookButton').onclick = function() {
            const newTitle = document.getElementById('newTitleInput').value;
            const updatedBook = { title: newTitle };
            updateBook(bookId, updatedBook);
        };
    }

    // POST function to add a new book to the database
    function addBook(book) {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Book added:', data);
            getBooks(); // Refresh the book list after adding a new one
        })
        .catch(error => console.error('Error:', error));
    }

    // PUT function to update an existing book in the database
    function updateBook(bookId, updatedBook) {
        fetch(`${baseUrl}/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBook)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Book updated:', data);
            getBooks(); // Refresh the book list after updating a book
            document.getElementById('updateFormContainer').style.display = 'none'; // Hide update form
        })
        .catch(error => console.error('Error:', error));
    }

    // DELETE function to remove a book from the database
    function deleteBook(bookId) {
        fetch(`${baseUrl}/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Book deleted:', data);
            getBooks(); // Refresh the book list after deleting a book
        })
        .catch(error => console.error('Error:', error));
    }

    // Fetch books when the page loads
    getBooks(); // Replace 'all' with the desired genre if needed

    // Add a new book when the Add Book button is clicked
    document.getElementById('addBookButton').addEventListener('click', function() {
        const newTitle = document.getElementById('newBookTitle').value;
        const newAuthor = document.getElementById('newBookAuthor').value;
        if (newTitle && newAuthor) {
            const newBook = { title: newTitle, author: newAuthor };
            addBook(newBook);
            document.getElementById('newBookTitle').value = '';
            document.getElementById('newBookAuthor').value = '';
        } else {
            alert('Please enter both title and author.');
        }
    });
});
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Recommendations</title>
</head>
<body>
    <h1>Book Recommendations</h1>
    
    <!-- Add Book Form -->
    <div>
        <input type="text" id="newBookTitle" placeholder="Enter book title">
        <input type="text" id="newBookAuthor" placeholder="Enter author name">
        <button id="addBookButton">Add Book</button>
    </div>

    <h2>Books List:</h2>
    <div id="resultContainer"></div>

    <!-- Update Book Form -->
    <div id="updateFormContainer" style="display:none;">
        <input type="text" id="newTitleInput" placeholder="Enter new title for the book">
        <button id="updateBookButton">Submit</button>
    </div>
</body>
</html>
