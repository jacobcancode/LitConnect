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
            resultContainer.appendChild(bookElement);
        });
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

    // Fetch books on page load
    getBooks('all'); // Replace 'all' with the desired genre if needed
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
    <div id="resultContainer"></div>
    <button id="updateBookButton" onclick="showUpdateForm('bookId')">Update Book</button>
    <div id="updateFormContainer" style="display:none;">
        <input type="text" id="newTitleInput" placeholder="Enter new title for the book">
        <button onclick="updateBook('bookId')">Submit</button>
    </div>
</body>
</html>