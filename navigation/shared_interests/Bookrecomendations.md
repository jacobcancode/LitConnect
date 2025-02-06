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
                    <p>${book.title}</p>
                    <button onclick="showUpdateForm('${book.id}')">Update Book</button>
                `;
                recommendationsContainer.appendChild(bookElement);
            });
        })
        .catch(error => {
            console.error('Error fetching books:', error);
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
                    fetchBooks(); // Refresh the book list
                }
            })
            .catch(error => {
                const resultContainer = document.getElementById('resultContainer');
                resultContainer.innerHTML = `<p>Error updating book: ${error.message}</p>`;
            });
        }
    }

    fetchBooks();
});
</script>

<div id="resultContainer"></div>
<div id="updateFormContainer" style="display:none;">
    <input type="text" id="newTitleInput" placeholder="Enter new title for the book">
    <button onclick="updateBook()">Submit</button>
</div>
<div id="recommendations-container"></div>