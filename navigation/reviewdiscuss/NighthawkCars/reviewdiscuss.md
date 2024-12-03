---
layout: page
title: Review and Discuss 
description: Have fun with your Peers!!
permalink: /review
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review Section</title>
    <style>
        body {
            background: linear-gradient(135deg, #333333, orange, #ffffff); /* 180deg for top-to-bottom gradient */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        h2, h3 {
            color: rgb(255, 80, 80);
            border-bottom: 4px solid #000000;
            font-weight: bold; /* Bold text */
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8),  /* White shadow */
                         2px 2px 0 rgba(255, 255, 255, 0.6); /* Lighter shadow */
            border-radius: 10px; /* Rounded effect */
            padding: 10px; /* Space around the text */
        }
        p {
            color: white;   
        }
        table {
            width: 100%;
            text-align: center;
            border-collapse: separate;
            border-spacing: 10px;
            border: none; /* Remove any borders from the table */
        }
        td {
            background-color: transparent !important; /* Remove background color */
            padding: 0 !important; /* Remove padding */
            border: none !important; /* Remove borders from table cells */
        }
        .button {
            background-color: white; /* Light red */
            color: black !important; /* White text */
            text-decoration: none;
            font-weight: bold;
            font-family: Arial, sans-serif;
            display: inline-block;
            padding: 15px 20px;
            border-radius: 20px;
            transition: transform 0.2s ease, background-color 0.2s ease;
            text-align: center;
        }
        .button:hover {
            transform: scale(1.05); /* Slightly larger on hover */
            background-color: lightgrey; /* Darker red on hover */
            color: black !important;
        }
        .button:active {
            transform: scale(0.95); /* Shrinks a bit on click */
            background-color: grey; /* Even darker red on click */
            color: black !important;
        }
        div {
            margin: 20px 0;
        }
        .message-box {
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 420px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
            vertical-align: middle; /* Centers content vertically */
        }
        /* Images will adjust in size up to a maximum width and height */
        img {
            max-width: 1000px; /* Adjust maximum width as desired */
            max-height: 1000px; /* Adjust maximum height as desired */
            object-fit: contain; /* Keeps images within the max dimensions without cropping */
        }
        .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }
        .image-gallery img {
            max-height: 150px;
            object-fit: cover;
        }
        .message-box1 {
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        .message-box1p{
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }
        .box11{
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            max-height: 200px; /* Maximum height */
            overflow-y: auto; /* Scrollable */
            margin-top: 10px; /* Space above message box */
        }
        #comment {
            width: 100%;      /* Full width of the container */
            height: 100px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #commentInput {
            width: 100%;      /* Full width of the container */
            height: 90px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #nameInput {
            width: 100%;      /* Full width of the container */
            height: 59px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        #optionSelect {
            width: 50%;      /* Full width of the container */
            height: 58px;    /* Height of the textarea */
            padding: 15px;    /* Padding inside the box */
            font-size: 16px;  /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }
        .regularButton {
        all: unset; /* Removes all default styles */
        background-color: white !important;
        border: 2px solid #ccc;
        border-radius: 12px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.1s ease;
        font-weight: bold;
        color: black !important;
        }
        .regularButton:hover {
            background-color: lightgray !important; /* Light gray on hover */
            transform: scale(1.05);
        }
        .regularButton:active {
            background-color: grey !important; /* Slightly darker gray when clicked */
            transform: scale(0.95); /* Slight scale-down effect on click */
        }
        .buttonP {
            all: unset !important;
            color: black !important;
        }
    </style>
</head>

<body>

<h3>This Week's Books!</h3>
<div>
    <p>Hunger Games: By Suzanne Collins</p>
    <img src="{{site.baseurl}}/images/book1.png" height="400" title="Home" alt="">
    <!-- Moderator Rating Section -->
<div class="moderator-rating">
  <h2>Moderator's Rating</h2>
  <div class="star-rating" style="color: gold;">
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
  </div>
  <div class="feedback-box">
    <h3>Moderator's Feedback</h3>
    <p class="feedback-content">
      Wonderful book and story plot! I really like the idea of the story and how two people are willing to sacrifice their lives for each other's love. Definitely 5/5 stars.
    </p>
  </div>




<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Star Rating</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 50px;
      background: #f9f9f9;
    }

    .star-rating {
      font-size: 3rem;
      color: #ddd;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }

    .star {
      transition: color 0.3s ease, transform 0.2s ease;
    }

    .star:hover,
    .star.selected,
    .star.hover {
      color: #f7d106;
      transform: scale(1.2);
    }

    #rating-display {
      margin-top: 20px;
      font-size: 1.4rem;
      color: #333;
    }

    #thank-you-message {
      margin-top: 20px;
      font-size: 1.2rem;
      color: #444;
      display: none;
      background: #e7f4e9;
      padding: 10px;
      border: 1px solid #c2e3cc;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1>Your Rating</h1>
  <p>Please rate the book and share your thoughts.</p>

  <!-- Star Rating Section -->
  <div class="star-rating">
    <span class="star" data-value="1">&#9733;</span>
    <span class="star" data-value="2">&#9733;</span>
    <span class="star" data-value="3">&#9733;</span>
    <span class="star" data-value="4">&#9733;</span>
    <span class="star" data-value="5">&#9733;</span>
  </div>

  <p id="rating-display">Your Rating: 0</p>
  <div id="thank-you-message">
    Thank you for rating! Feel free to discuss your thoughts and the moderator's opinion below.
  </div>

  <script>
    const stars = document.querySelectorAll('.star');
    const ratingDisplay = document.getElementById('rating-display');
    const thankYouMessage = document.getElementById('thank-you-message');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        // Clear previous selections
        stars.forEach(s => s.classList.remove('selected'));
        // Highlight selected stars
        star.classList.add('selected');
        const rating = star.getAttribute('data-value');
        ratingDisplay.textContent = `Your Rating: ${rating}`;
        // Show thank you message
        thankYouMessage.style.display = 'block';
      });

      star.addEventListener('mouseover', () => {
        stars.forEach(s => {
          if (s.getAttribute('data-value') <= star.getAttribute('data-value')) {
            s.classList.add('hover');
          } else {
            s.classList.remove('hover');
          }
        });
      });

      star.addEventListener('mouseout', () => {
        stars.forEach(s => s.classList.remove('hover'));
      });
    });
  </script>
</body>
</html>


<h2>Discussion</h2>
<textarea placeholder="Enter your thoughts or comments here..." id="comment"></textarea>
<button class="regularButton" onclick="addComment()"><p class="buttonP">Add Comment</p></button>

<div class="message-box" id="messageBox">
    <p><strong>Messages:</strong></p>
</div>
 <script type="module">
import { pythonURI, fetchOptions } from '../../../assets/js/api/config.js';
const channelID = 22;
const commentTitle = "economyCars";
async function addComment() {
    const argumentText = document.getElementById('comment').value.trim();
    if (!argumentText) {
        alert('Please enter a comment.');
        return;
    }
    const argumentData = {
        title: commentTitle,
        comment: argumentText,
        channel_id: channelID,
        user_name: localStorage.getItem('username') || 'Guest'
    };
    try {
        const response = await fetch(`${pythonURI}/api/post`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(argumentData)
        });
        if (!response.ok) throw new Error('Failed to submit comment: ' + response.statusText);
        document.getElementById('comment').value = ''; // Clear input field
        fetchComments(); // Refresh comments list
    } catch (error) {
        console.error('Error submitting comment:', error);
        alert('Error submitting comment: ' + error.message);
    }
}
async function fetchComments() {
    try {
        const response = await fetch(`${pythonURI}/api/posts/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ channel_id: channelID })
        });
        if (!response.ok) throw new Error('Failed to fetch comments: ' + response.statusText);
        const argumentsData = await response.json();
        // Reverse the order of the comments so the latest comes first
        argumentsData.reverse();
        const messageBox = document.getElementById('messageBox');
        messageBox.innerHTML = "<p><strong>Messages :</strong></p>"; // Clear existing comments
        argumentsData.forEach(arg => {
            const commentElement = document.createElement("p");
            commentElement.textContent = `${arg.user_name}: ${arg.comment}`;
            messageBox.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
        alert('Error fetching comments: ' + error.message);
    }
}
window.addEventListener('load', () => {
    fetchComments(channelID); // Fetch initial comments on page load
});
window.addComment = addComment; // Expose the function globally
    </script>
    </body>
</html>
