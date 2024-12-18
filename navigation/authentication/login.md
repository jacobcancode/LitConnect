---
layout: page 
title: Login
permalink: /login
search_exclude: true
show_reading_time: false 
---

<script>
    function openLoginPopup() {
        window.open('/_includes/nav/login-popup.html', 'Login', 'width=400,height=500');
    }

    // Automatically open the login popup when the page loads
    window.onload = openLoginPopup;
</script>

<style>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height of the viewport */
    background-color: #f5f5f5; /* Light background color */
    flex-wrap: wrap; /* allows the cards to wrap onto the next line if the screen is too small */
}

.login-card, .signup-card {
    width: 100%;
    max-width: 400px; /* Limit the width of the card */
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff; /* White background for the card */
    margin: 10px; /* Add some margin between cards */
}

.login-card h2, .signup-card h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333; /* Darker text color */
}

.login-card label, .signup-card label {
    display: block;
    margin-bottom: 5px;
    color: #555; /* Slightly lighter text color */
}

.login-card input, .signup-card input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.login-card button, .signup-card button {
    width: 100%;
    padding: 10px;
    background-color: #007bff; /* Blue background color */
    border: none;
    border-radius: 5px;
    color: #fff; /* White text color */
    font-size: 16px;
    cursor: pointer;
}

.login-card button:hover, .signup-card button:hover {
    background-color: #0056b3; /* Darker blue on hover */
}
</style>

<div class="login-container">
    <div class="login-card">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
    </div>
    <div class="signup-card">
        <h2>Sign Up</h2>
        <form id="signupForm">
            <label for="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required>
            <label for="newPassword">Password:</label>
            <input type="password" id="newPassword" name="newPassword" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</div>
