---
layout: post 
title: Book Club Hub
search_exclude: true
permalink: /bookclubuub
menu: nav/shared_interests.html
---


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Club Hub</title>
  <style>
    /* General styles for body and structure */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.6;
    }

    header {
      background-color: #004080;
      color: white;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      margin: 0;
    }

    .container {
      max-width: 1100px;
      margin: 20px auto;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .section {
      margin-bottom: 40px;
    }

    h2 {
      color: #004080;
      border-bottom: 2px solid #ddd;
      padding-bottom: 5px;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      background: #f1f1f1;
      margin: 10px 0;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    input, textarea, select, button {
      display: block;
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      font-size: 14px;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-sizing: border-box;
    }

    button {
      background-color: #004080;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background-color: #003366;
    }

    .recommendations-list li {
      background: #e6f7ff;
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
      <!-- Program with Output: Display list of books -->
      <ul id="books-list"></ul>
    </div>

    <!-- Reading List Section -->
    <div class="section" id="reading-list-section">
      <h2>Your Reading List</h2>
      <!-- Program with Input and Output: Form to add books to reading list -->
      <form id="reading-list-form">
        <input type="text" id="reading-list-book" placeholder="Add a book to your reading list" required>
        <button type="submit">Add to Reading List</button>
      </form>
      <!-- Program with a List: Display reading list -->
      <ul id="reading-list"></ul>
    </div>

    <!-- Recommendations Section -->
    <div class="section" id="recommendations-section">
      <h2>Book Recommendations</h2>
      <!-- Program with a Dictionary: Provide recommendations based on genre -->
      <label for="genre-select">Choose a Genre:</label>
      <select id="genre-select">
        <option value="Fiction">Fiction</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Mystery">Mystery</option>
      </select>
      <button id="get-recommendations">Get Recommendations</button>
      <!-- Output recommendations -->
      <ul id="recommendations-list" class="recommendations-list"></ul>
    </div>

    <!-- Discussion Section -->
    <div class="section" id="discussion-section">
      <h2>Discussions</h2>
      <!-- Program with Iteration: Form to post discussion comments -->
      <form id="discussion-form">
        <input type="text" id="discussion-user" placeholder="Your Name" required>
        <textarea id="discussion-comment" placeholder="Your Comment" required></textarea>
        <button type="submit">Post</button>
      </form>
      <!-- List of comments -->
      <ul id="discussion-list"></ul>
    </div>
  </div>

  <script>
    // Data for books and genres
    const books = [
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
      { title: "1984", author: "George Orwell" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
    ];
    const bookGenres = {
      Fiction: ["To Kill a Mockingbird", "The Great Gatsby"],
      "Science Fiction": ["1984", "Dune"],
      Mystery: ["Sherlock Holmes", "Gone Girl"]
    };

    // Reading List and Discussions storage
    const readingList = [];
    const discussions = [];

    // Program with Output: Display the list of books
    const booksList = document.getElementById("books-list");
    books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}`;
      booksList.appendChild(li);
    });

    // Program with Input and Output: Add to the reading list
    const readingListForm = document.getElementById("reading-list-form");
    readingListForm.addEventListener("submit", event => {
      event.preventDefault();
      const book = document.getElementById("reading-list-book").value;
      readingList.push(book); // Program with a List: Manage reading list
      document.getElementById("reading-list-book").value = ""; // Clear input field

      const li = document.createElement("li");
      li.textContent = book;
      document.getElementById("reading-list").appendChild(li);
    });

    // Program with a Dictionary: Provide book recommendations by genre
    const recommendationsButton = document.getElementById("get-recommendations");
    recommendationsButton.addEventListener("click", () => {
      const genre = document.getElementById("genre-select").value;
      const recommendations = bookGenres[genre] || [];

      const recommendationsList = document.getElementById("recommendations-list");
      recommendationsList.innerHTML = ""; // Clear previous recommendations
      recommendations.forEach(book => {
        const li = document.createElement("li");
        li.textContent = book;
        recommendationsList.appendChild(li);
      });
    });

    // Program with Iteration: Add and display discussion comments
    const discussionForm = document.getElementById("discussion-form");
    discussionForm.addEventListener("submit", event => {
      event.preventDefault();
      const user = document.getElementById("discussion-user").value;
      const comment = document.getElementById("discussion-comment").value;
      discussions.push({ user, comment });

      document.getElementById("discussion-user").value = "";
      document.getElementById("discussion-comment").value = "";

      const li = document.createElement("li");
      li.textContent = `${user}: ${comment}`;
      document.getElementById("discussion-list").appendChild(li);
    });
  </script>
</body>
</html>

