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
        /* Apply the background to the body */
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

        .message-box1, .message-box1p, .box11 {
            background-color: #000000;
            border: 4px solid #ffffff; /* Light gray border */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 40px; /* Space above message box */
        }

        #comment, #commentInput, #nameInput, #optionSelect {
            width: 100%; /* Full width of the container */
            padding: 15px; /* Padding inside the box */
            font-size: 16px; /* Larger font size for better readability */
            border-radius: 8px; /* Rounded corners */
            border: 3px solid #C0C0C0; /* Border color */
            resize: vertical; /* Allows users to adjust height but not width */
        }

        #comment { height: 100px; }
        #commentInput { height: 90px; }
        #nameInput { height: 59px; }
        #optionSelect { width: 50%; height: 58px; }

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

        .star:hover, .star.selected, .star.hover {
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
    <h3>This Week's Books!</h3>
    <div>
        <p>Hunger Games: By Suzanne Collins</p>
        <img src="{{site.baseurl}}/images/book1.png" height="400" title="Home" alt="">
    </div>

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
            <p>Wonderful book and story plot! I really like the idea of the story and how two people are willing to sacrifice their lives for each other's love. Definitely 5/5 stars.</p>
        </div>
    </div>

    <!-- Star Rating -->
    <h1>Your Rating</h1>
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

    <!-- Discussion Section -->
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
            const argumentText = document.getElementById('ratingContent').value;
        }

        const starRating = document.getElementsByClassName("X--ratingstars");
        starRating.onclick = reply **code rendering reply paths + anch**

Keep Questions Unique!.
