---
layout: post
title: Welcome to LitConnect—Where Ideas Meet and Books Come Alive
search_exclude: true
description: A social connectivity website made to foster engagement between readers. Click on top headers to view our main pages, or click on these links!
hide: true
menu: nav/home.html
---

<style>
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #6a1b9a; /* Nice purple background color */
    color: #ffffff; /* White text for better contrast */
  }

  table {
    width: 100%;
    margin: 20px 0;
    border-collapse: collapse;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  td {
    padding: 15px;
    text-align: center;
    vertical-align: middle;
  }

  #createandcompete a {
    display: inline-block;
    text-decoration: none;
  }

  img {
    max-width: 100px;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.1);
  }

  .dropdownp4 {
    position: relative;
  }

  .dropbtn {
    background-color: #8e24aa; /* Purple button */
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    text-transform: uppercase;
    transition: background-color 0.3s;
  }

  .dropbtn:hover {
    background-color: #5e35b1; /* Darker purple */
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 1;
    min-width: 200px;
    border-radius: 5px;
  }

  .dropdown-content a {
    color: #333;
    padding: 10px 20px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    transition: background-color 0.3s;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdownp4:hover .dropdown-content {
    display: block;
  }

  .content {
    text-align: center;
    padding: 30px 20px;
  }

  .content img {
    margin: 20px auto;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  footer {
    text-align: center;
    background-color: #8e24aa; /* Purple footer */
    color: white;
    padding: 15px 10px;
    margin-top: 20px;
  }

  footer a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
</style>

<table>
  <tr>
    <td id="createandcompete" class="dropdownp4">
      <a href="{{site.baseurl}}/voteforthegoat/home">
        <img src="{{site.baseurl}}/images/favicon.ico" alt="Icon">
      </a>
    </td>
    <td class="dropdownp4">
      <button class="dropbtn">Intro</button>
      <div class="dropdown-content">
        <a href="{{site.baseurl}}/backend_a">Personalized Reading List Fun</a>
        <a href="{{site.baseurl}}/backend_s">About Creators</a>
        <a href="{{site.baseurl}}/preferences_2">Preferences</a>
      </div>
    </td>
  </tr>
</table>

<div class="content">
  <h1>Welcome to LitConnect!</h1>
  <p>Discover your next favorite book and connect with fellow readers from around the world.</p>
  <img src="https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png" alt="LitConnect Visual">
</div>

<footer>
  <p>© 2024 LitConnect | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></p>
</footer>

<script>
  // Function to fetch preferences from the backend
  function loadPreferences() {
    fetch('http://localhost:8887/api/preferences')  // Adjust URL if needed
      .then(response => response.json())
      .then(data => {
        // Update the page with the preferences
        const menuElement = document.getElementById('menu');
        const textElement = document.getElementById('text');

        if (menuElement) {
          menuElement.innerText = `Menu: ${data.menu}`;
        }

        if (textElement) {
          textElement.innerText = `Text: ${data.text}`;
        }

        // Apply text color to <p> elements
        let pColors = document.querySelectorAll('p');
        pColors.forEach(p => {
          p.style.color = data.text;
        });

        // Change menu text color
        let menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
          item.style.color = data.menu;
        });
      })
      .catch(error => {
        console.error('Error fetching preferences:', error);
      });
  }

  // Load preferences when the page is loaded
  window.onload = loadPreferences;
</script>
