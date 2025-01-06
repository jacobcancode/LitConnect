import { pythonURI, fetchOptions } from './config.js';

console.log("login.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    const baseurl = document.querySelector('.trigger') ? document.querySelector('.trigger').getAttribute('data-baseurl') : 'http://127.0.0.1:8887';
    console.log("Base URL:", baseurl); // Debugging line

    // Ensure the login form exists before adding the event listener
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            getCredentials(baseurl, username, password) // Call the function to get credentials
                .then(data => {
                    console.log("Credentials data:", data); // Debugging line
                    const loginArea = document.getElementById('loginArea');
                    if (data) { // Update the login area based on the data
                        loginArea.innerHTML = `<a href="${baseurl}/login">${data.name}</a>`;
                        localStorage.setItem('authenticated', 'true'); // Set authenticated status in local storage
                    } else {
                        // User is not authenticated, then "Login" link is shown
                        loginArea.innerHTML = `<a href="${baseurl}/login">Login</a>`;
                        localStorage.setItem('authenticated', 'false'); // Set authenticated status in local storage
                    }
                })
                .catch(err => { // General error handler
                    console.error("Error fetching credentials: ", err);
                    // Handle any errors that occurred during getCredentials
                    localStorage.setItem('authenticated', 'false'); // Set authenticated status in local storage
                });
        });
    } else {
        console.error("Login form not found");
    }
});

function getCredentials(baseurl, username, password) {
    const URL = pythonURI + '/api/id';
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    headers.set('Content-Type', 'application/json');

    const fetchOptionsWithAuth = {
        method: 'GET',
        headers: headers,
        credentials: 'include' // Include credentials
    };

    return fetch(URL, fetchOptionsWithAuth)
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    // Handle 401 specifically
                    console.error("Authentication failed");
                    // Redirect to login, display error message, etc.
                    return Promise.reject(new Error("401 Unauthorized"));
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Or response.text() etc.
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            // Appropriate error handling
        });
}