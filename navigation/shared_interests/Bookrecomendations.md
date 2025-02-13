---
layout: page 
title: Book Reading List
permalink: /bookrecommendations
search_exclude: true
show_reading_time: false 
---
<div class="section">
  <h2>Suggest a book to be added to your reading list</h2>
  <input type="text" id="book" placeholder="Enter book title" required>
  <input type="text" id="author" placeholder="Enter author" required>
  <input type="text" id="genre" placeholder="Enter genre" required>
  <button id="createBookButton">Create</button>

  <h2>All Books</h2>
  <button id="getAllBooksButton">List of Books</button>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="booksTableBody">
      <!-- Books will be loaded here -->
    </tbody>
  </table>
</div>

<script type="module">
    import { pythonURI } from "./assets/js/api/config.js";

  document.addEventListener('DOMContentLoaded', function() {
    loadAllBooks();
  });

  async function loadAllBooks() {
    const tableBody = document.getElementById('booksTableBody');

    try {
        const response = await fetch(`${pythonURI}/api/book`);
        const data = await response.json();
        tableBody.innerHTML = '';
        data.forEach(book => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>
              <button onclick="editBook(${book.id})">Edit</button>
              <button onclick="deleteBook(${book.id})">Delete</button>
            </td>
          `;
          tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading books:', error);
    }
  }

  document.getElementById('createBookButton').addEventListener('click', async () => {
    const title = document.getElementById('book').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    try {
        const response = await fetch(`${pythonURI}/api/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, genre })
        });

        if (response.ok) {
            loadAllBooks();
        } else {
            console.error('Error adding book:', response.statusText);
        }
    } catch (error) {
        console.error('Error adding book:', error);
    }
  });

  function editBook(id) {
    // Implement edit functionality
  }

  function deleteBook(id) {
    const resultContainer = document.getElementById('resultContainer');

    fetch(`${pythonURI}/api/book/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            resultContainer.innerHTML = `<p>Book deleted successfully.</p>`;
            document.getElementById('getAllBooksButton').click(); // Refresh the book list
        } else {
            return response.json().then(data => {
                throw new Error(data.error);
            });
        }
    })
    .catch(error => {
        resultContainer.innerHTML = `<p>Error deleting book: ${error.message}</p>`;
    });
  }
</script>
