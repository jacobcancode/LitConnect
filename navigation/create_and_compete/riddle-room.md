---
layout: post 
title: Moderator's Picks Discussion Room
search_exclude: true
permalink: /chat
menu: nav/create_and_compete.html
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Room</title>
    <link rel="stylesheet" href="{{site.baseurl}}/navigation/create_and_compete/chat.css">
</head>
<body>
    <details>
        <br>
        <summary>Room Details</summary>
        <a href="{{site.baseurl}}/moderation/rules_chat/">Moderation Rules</a>
        <p>Discuss your thoughts and collaborate with other curious members!</p>
        <p>Room will consist of:</p>
        <ul>
            <li>Chat box where members of the channel can collaborate and share ideas</li>
            <li>Profanity is censored</li>
            <li>Moderators will oversee discussions to ensure they stay respectful and productive</li>
        </ul>
    </details>

    <div id="chat-container">
        <div id="chat-box"></div>
        <div id="users-list">
            <h4 style="color: #4A4848;">Users</h4>
            <ul id="userList">
                <li>System</li>
            </ul>
        </div>
    </div>

    <div class="input-group">
        <input type="text" id="message-input" placeholder="Type your message...">
        <button id="send-button" onclick="sendMessage()">Send</button>
    </div>

    <script>
        const chatBox = document.getElementById('chat-box');
        const messageInput = document.getElementById('message-input');
        const userList = document.getElementById('userList');
        const users = new Set(['System']);
        let username;

        function requestUsername() {
            while (true) {
                const enteredUsername = prompt("Enter your username:");
                if (enteredUsername && !users.has(enteredUsername)) {
                    username = enteredUsername;
                    addUser(username);
                    displayMessage(`You have joined as ${username}.`, true);
                    break;
                } else {
                    alert("Username is taken or invalid. Please try again.");
                }
            }
        }

        function displayMessage(message, isSystem = false) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', isSystem ? 'system-message' : 'user-message');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function addUser(newUsername) {
            users.add(newUsername);
            const userItem = document.createElement('li');
            userItem.textContent = newUsername;
            userList.appendChild(userItem);
        }

        function sendMessage() {
            const messageText = messageInput.value.trim();
            if (messageText !== '') {
                displayMessage(`${username}: ${messageText}`);
                messageInput.value = '';
            }
        }

        displayMessage("Welcome to the Chat Room!", true);
        requestUsername();
    </script>
</body>
</html>
