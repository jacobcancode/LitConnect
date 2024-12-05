---
layout: post 
title: Book Club Hub
search_exclude: true
permalink: /bookclubuub
menu: nav/shared_interests.html
---
Up
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Club Hub</title>
  <style>
    /* General styles for improved readability */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #1e1e2f;
      color: #f0f0f0;
      line-height: 1.6;
    }

    header {
      background-color: #6200ea;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .container {
      max-width: 1100px;
      margin: 20px auto;
      padding: 20px;
      background: #2e2e4e;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .section {
      margin-bottom: 40px;
    }

    h2 {
      color: #ffc107;
      border-bottom: 2px solid #ddd;
      padding-bottom: 5px;
      margin-bottom: 20px;
    }

    select, input, textarea, button {
      display: block;
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      font-size: 14px;
      border: 1px solid #666;
      border-radius: 5px;
      box-sizing: border-box;
    }

    button {
      background-color: #6200ea;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background-color: #4500b2;
    }
  </style>
</head>
<body>
  <header>
    <h1>Book Club Hub</h1>
  </header>

  <div class="container">
    <!-- Books Section -->
    <div class="section" id="books-section">
      <h2>Books</h2>
      <!-- Output: Dropdown list for books (Collection) -->
      <!-- College Board Requirement: 
        - Use a collection (list) to represent a collection of data (books) 
        - Allows for a dynamic selection from a list. -->
      <label for="books-dropdown">Available Books:</label>
      <select id="books-dropdown"></select>
    </div>

    <!-- Reading List Section -->
    <div class="section" id="reading-list-section">
      <h2>Your Reading List</h2>
      <!-- Input: Dropdown to select a book to add to the reading list -->
      <!-- College Board Requirement:
        - Use a list (or collection type) to represent the user's reading list -->
      <form id="reading-list-form">
        <label for="reading-list-book">Choose a Book to Add:</label>
        <select id="reading-list-book"></select>
        <button type="submit">Add to Reading List</button>
      </form>
      <!-- Output: Display the reading list in a dropdown format -->
      <!-- College Board Requirement:
        - A collection is used to display the user's selected reading list -->
      <label for="reading-list-dropdown">Your Reading List:</label>
      <select id="reading-list-dropdown" size="5"></select>
    </div>

    <!-- Recommendations Section -->
    <div class="section" id="recommendations-section">
      <h2>Book Recommendations</h2>
      <!-- Input: Dropdown to choose a genre for book recommendations -->
      <!-- College Board Requirement:
        - Dropdown allows user input to trigger event-based selection (user actions that trigger events) -->
      <label for="genre-select">Choose a Genre:</label>
      <select id="genre-select">
        <option value="Fiction">Fiction</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Mystery">Mystery</option>
      </select>
      <button id="get-recommendations">Get Recommendations</button>
      <!-- Output: Display book recommendations based on selected genre -->
      <!-- College Board Requirement:
        - Use a list to display book recommendations -->
      <label for="recommendations-list">Recommended Books:</label>
      <select id="recommendations-list" size="5"></select>
    </div>

    <!-- Discussion Section -->
    <div class="section" id="discussion-section">
      <h2>Discussions</h2>
      <!-- Input: Form to post discussion comments -->
      <!-- College Board Requirement:
        - Use input fields for user text-based input (tactile/textual input). -->
      <form id="discussion-form">
        <label for="discussion-user">Your Name:</label>
        <input type="text" id="discussion-user" placeholder="Enter your name" required>
        
        <label for="discussion-comment">Your Comment:</label>
        <textarea id="discussion-comment" placeholder="Enter your comment" required></textarea>
        
        <button type="submit">Post</button>
      </form>
      <!-- Output: List of discussion comments (Iteration through list) -->
      <!-- College Board Requirement:
        - Iterate through a collection of discussion comments to display them -->
      <label for="discussion-list">Discussion Comments:</label>
      <select id="discussion-list" size="5"></select>
    </div>
  </div>

  <script>
    // Data: Initial list of books
    const books = [
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
      { title: "1984", author: "George Orwell" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
    ];

    // Data: Book genres and their recommended books
    const bookGenres = {
      Fiction: ["To Kill a Mockingbird", "The Great Gatsby"],
      "Science Fiction": ["1984", "Dune"],
      Mystery: ["Sherlock Holmes", "Gone Girl"]
    };

    // Storage for reading list and discussion comments
    const readingList = []; // List to manage reading list
    const discussions = []; // List to store discussion comments

    // Output: Populate dropdown with books list
    const booksDropdown = document.getElementById("books-dropdown");
    books.forEach(book => {
      const option = document.createElement("option");
      option.textContent = `${book.title} by ${book.author}`;
      booksDropdown.appendChild(option);
    });

    // Output: Populate the dropdown for the reading list
    const readingListDropdown = document.getElementById("reading-list-dropdown");
    const readingListForm = document.getElementById("reading-list-form");

    // Add books to the reading list dropdown when selected
    readingListForm.addEventListener("submit", event => {
      event.preventDefault();
      const selectedBook = document.getElementById("reading-list-book").value;

      // Add selected book to the reading list array
      readingList.push(selectedBook);

      // Update the dropdown with the new book
      const option = document.createElement("option");
      option.textContent = selectedBook;
      readingListDropdown.appendChild(option);
    });

    // Output: Genre-based book recommendations in dropdown
    const recommendationsButton = document.getElementById("get-recommendations");
    recommendationsButton.addEventListener("click", () => {
      const genre = document.getElementById("genre-select").value;
      const recommendations = bookGenres[genre] || [];

      const recommendationsList = document.getElementById("recommendations-list");
      recommendationsList.innerHTML = ""; // Clear previous recommendations
      recommendations.forEach(book => {
        const option = document.createElement("option");
        option.textContent = book;
        recommendationsList.appendChild(option);
      });
    });

    // Output: Add discussion comments to list and display
    const discussionForm = document.getElementById("discussion-form");
    discussionForm.addEventListener("submit", event => {
      event.preventDefault();
      const user = document.getElementById("discussion-user").value;
      const comment = document.getElementById("discussion-comment").value;

      // Store discussion in list
      discussions.push({ user, comment });

      // Display the new comment in the list
      const option = document.createElement("option");
      option.textContent = `${user}: ${comment}`;
      document.getElementById("discussion-list").appendChild(option);

      // Clear the input fields
      document.getElementById("discussion-user").value = "";
      document.getElementById("discussion-comment").value = "";
    });
  </script>
</body>
</html>
