---
layout: post
title: LitConnect
search_exclude: true
description: Welcome to LitConnect, a social connectivity website made to foster engagement between readers. Click on top headers to view our main pages, or click view the intro menu to customize your experience!
hide: true
menu: nav/home.html
---
<style>
/* Ensure the entire page has the purple background */
html, body {
  height: 100%;              
  margin: 0;                 
  padding: 0;                
  background-color: #6a1b9a !important; /* Purple background for entire page and !important to disregard pre-set theme*/
}

body {
  font-family: 'Arial', sans-serif;
  color: #ffffff; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: 100%; 
}

table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

td {
  padding: 15px;
  text-align: center;
  vertical-align: middle;
}

.content {
  text-align: center;
  padding: 30px 20px;
  flex-grow: 1; 
}

.content img {
  margin: 20px auto;
  max-width: 800px;
  height: auto;     
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}


footer {
  text-align: center;
  background-color: #6a1b9a; 
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

<body>
  <div class="content">
    <h2>Discover your next favorite book and connect with fellow readers from around the world.</h2>
    <img src="https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png" alt="LitConnect Visual">
  </div>

  <footer>
    <p>© 2024 LitConnect | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></p>
  </footer>
<body>

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
