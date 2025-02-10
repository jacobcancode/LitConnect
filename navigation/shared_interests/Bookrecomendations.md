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
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
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
        .then(data => console.log(data))
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
        .then(data => console.log(data))
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
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
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
</form>    
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
</body>
</html>