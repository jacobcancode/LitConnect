---
layout: page 
title: Book Reading List
permalink: /bookrecommendations
search_exclude: true
show_reading_time: false 
---
<script>
document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://litconnect.stu.nighthawkcodingsociety.com/booking/api/book';

    // GET function to fetch books by genre
    function getBooks(genre) {
        fetch(`${baseUrl}?genre=${genre}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => displayBooks(data))
        .catch(error => console.error('Error:', error));
    }

    // Function to display books
    function displayBooks(books) {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = '';
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.textContent = `${book.title} by ${book.author}`;

            // Add buttons for updating and deleting each book
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            updateButton.onclick = () => showUpdateForm(book.id, book.title);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteBook(book.id);

            bookElement.appendChild(updateButton);
            bookElement.appendChild(deleteButton);
            resultContainer.appendChild(bookElement);
        });
    }

    // Function to show the update form
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

    // POST function to add a new book
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
            console.log(data);
            getBooks('all'); // Refresh book list after adding a new one
        })
        .catch(error => console.error('Error:', error));
    }

    // PUT function to update an existing book
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
            console.log('Updated book:', data);
            // Refresh the books list after update
            getBooks('all');
        })
        .catch(error => console.error('Error:', error));
    }

    // DELETE function to remove a book
    function deleteBook(bookId) {
        fetch(`${baseUrl}/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Deleted book:', data);
            // Refresh the books list after deletion
            getBooks('all');
        })
        .catch(error => console.error('Error:', error));
    }

    // Fetch books on page load
    getBooks('all'); // Replace 'all' with the desired genre if needed

    // Adding a new book when the add book button is clicked
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
    <div id="updateFormContainer" style
