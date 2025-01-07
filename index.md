---
layout: post
title: LitConnect
search_exclude: true
hide: true
menu: nav/home.html
---
<style>
/* Ensure the entire page has the purple background */
html, body {
  height: 100%;              
  margin: 0;                 
  padding: 0;                
  background-color: #6a1b9a !important; /* Purple background for entire page */
}

body {
  font-family: 'Arial', sans-serif;
  color: #ffffff; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: 100%; 
}

.content {
  padding: 30px 20px;
  text-align: left;
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

/* Bookshelf styles */
.bookshelf {
  width: 300px; 
  height: 20px;
  background-color: #8B4513; 
  margin: 50px auto; 
  margin-top: 200px;
  position: relative; /* Position relative for absolute positioning of books */
}

.book {
  position: absolute; 
  bottom: 20px; /* Position books above the shelf */
  color: black !important; /* Ensure text color is black */
  text-align: center;
  font-weight: bold;
  padding: 10px;
  font-size: 14px; 
  writing-mode: vertical-rl; /* Rotate text */
  transform: rotate(180deg); /* Rotate text back to normal */
}

/* Resized books */
.book1 { background-color: #FF6347; height: 120px; width: 40px; left: 20px; } /* Preferences */
.book2 { background-color: #4682B4; height: 100px; width: 60px; left: 80px; } /* Moderators Picks */
.book3 { background-color: #32CD32; height: 140px; width: 40px; left: 140px; } /* Personalized Reading List */
.book4 { background-color: #FFD700; height: 100px; width: 55px; left: 220px; } /* About Creators */

.monitor {
  width: 450px;  
  height: 300px; 
  background-color: #007FFF;
  border: 7.5px solid black; /* Black border for monitor */
  position: relative; 
  margin: 80px auto;  
  border-radius: 7.5px; /* Rounded corners */
}

.stand {
  position: absolute;
  bottom: -75px; /* Adjusted to position below the monitor */
  left: 50%; 
  transform: translateX(-50%); /* Center the stand */
  width: 30px; 
  height: 75px; 
  background-color: black;
}

.base {
  position: absolute;
  bottom: -90px; /* Keep this as is for the base */
  left: 50%; 
  transform: translateX(-50%); /* Center the base */
  width: 400px; 
  height: 20px; 
  background-color: black; 
}

/* Button Styles */
.button {
  display: block;
  width: 300px; 
  margin: 15px auto;
  padding: 15px; 
  background-color: #599BDE !important;
  color: black !important; 
  text-align: center;
  border: 3px solid black; 
  border-radius: 5px; 
  text-decoration: none; 
  font-weight: bold; 
  margin-top: 30px; 
}

</style>

<div class="content">
  <h3> Welcome to LitConnect, a social connectivity website made to foster engagement between readers. Click on the links on the monitor to view our main pages, or click the spines of the books to customize your experience! 
  </h3>
</div>

<div class="bookshelf">
    <a href="{{site.baseurl}}/preferences_2" class="book book1">Preferences</a>
    <a href="{{site.baseurl}}/voteforthegoat/home" class="book book2">Moderators Picks</a>
    <a href="{{site.baseurl}}/backend_a" class="book book3">Personalized</a>
    <a href="{{site.baseurl}}/backend_s" class="book book4">About Creators</a>
</div>


<div class="content">
  <h2 class="menu-item">Discover your next favorite book and connect with fellow readers from around the world.</h2>
  <img src="https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png" alt="LitConnect Visual">
</div>

<div class="monitor">
  <div class="stand"></div>
  <div class="base"></div>
  <a href="{{site.baseurl}}/bookclubuub" class="button">Book Club Hub</a>
  <a href="{{site.baseurl}}/create_and_compete/home" class="button">Author Spotlight</a>
  <a href="{{site.baseurl}}/cafe" class="button">Cafe Store</a>
  <a href="{{site.baseurl}}/littest" class="button">Literary Personality Test</a>
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
