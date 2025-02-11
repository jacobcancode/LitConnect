---
layout: post
title: LitConnect
search_exclude: true
hide: true
menu: nav/home.html
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LitConnect</title>
  <style>
    html, body {
      height: 100%;              
      margin: 0;                 
      padding: 0;                
      background-color: #6a1b9a !important;
      font-family: 'Arial', sans-serif;
      color: #ffffff; 
      display: flex; 
      flex-direction: column; 
      justify-content: space-between; 
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

    .bookshelf {
      width: 300px; 
      height: 20px;
      background-color: #8B4513; 
      margin: 50px auto; 
      margin-top: 200px;
      position: relative; 
    }

    .book {
      position: absolute; 
      bottom: 20px; 
      color: black !important; 
      text-align: center;
      font-weight: bold;
      padding: 10px;
      font-size: 14px; 
      writing-mode: vertical-rl; 
      transform: rotate(180deg); 
    }

    .book1 { background-color: #FF6347; height: 120px; width: 40px; left: 20px; }
    .book2 { background-color: #4682B4; height: 100px; width: 60px; left: 80px; }
    .book3 { background-color: #32CD32; height: 140px; width: 40px; left: 140px; }
    .book4 { background-color: #FFD700; height: 100px; width: 55px; left: 220px; }

    .monitor {
      width: 800px;  
      height: 500px; 
      background-image: url('https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=910'); 
      background-size: cover; 
      background-position: center; 
      border: 7.5px solid black; 
      position: relative; 
      margin: 80px auto;  
      border-radius: 7.5px;
      display: flex;              
      justify-content: space-between; 
      padding: 20px; 
      box-sizing: border-box; 
    }

    .stand {
      position: absolute;
      bottom: -75px; 
      left: 50%; 
      transform: translateX(-50%); 
      width: 40px; 
      height: 75px; 
      background-color: black;
    }

    .base {
      position: absolute;
      bottom: -90px; 
      left: 50%; 
      transform: translateX(-50%); 
      width: 500px; 
      height: 20px; 
      background-color: black; 
    }

    .button {
      width: 50px; 
      margin: 5px 0; 
      text-align: center;     
      text-decoration: none;      
      font-weight: bold;   
      font-size: 10px; 
    }

    .button img {
      width: 100%;              
      border-radius: 5px 5px 0 0; 
    }

    .button span {
      display: block;         
      padding: 5px 0;           
      color: black;              
    }

    .button-column {
      display: flex;
      flex-direction: column; 
      align-items: center; 
      width: 45%;
      max-height: 90%; 
      justify-content: space-around; 
    }

  </style>
</head>

<div class="content">
    <h3>Welcome to LitConnect, a social connectivity website made to foster engagement between readers. Click on the links on the monitor to view our main pages, or click the spines of the books to customize your experience!</h3>
</div>

<div class="bookshelf">
    <a href="{{site.baseurl}}/preferences_2" class="book book1">Preferences</a>
    <a href="{{site.baseurl}}/voteforthegoat/home" class="book book2">Moderators Picks</a>
    <a href="{{site.baseurl}}/backend_a" class="book book3">Personalized</a>
    <a href="{{site.baseurl}}/backend_s" class="book book4">About Creators</a>
</div>

<a href="{{site.baseurl}}/usersDb">usersDb</a>

<div class="content">
    <h2 class="menu-item">Discover your next favorite book and connect with fellow readers from around the world.</h2>
    <img src="https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png" alt="LitConnect Visual">
</div>

<div class="monitor">
    <div class="stand"></div>
    <div class="base"></div>

    <div class="button-column">
        <a href="{{site.baseurl}}/bookclubuub" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Book_Club_Hub.png" alt="Book Club Hub">
            <span>Book Club Hub</span>
        </a>
        
        <a href="{{site.baseurl}}/create_and_compete/home" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Authors_Spotlight.png" alt="Author Spotlight">
            <span>Author Spotlight</span>
        </a>
        
        <a href="{{site.baseurl}}/cafe" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Cafe_Store_App_Logo.png" alt="Cafe Store">
            <span>Cafe Store</span>
        </a>
        
        <a href="{{site.baseurl}}/littest" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Littest.png" alt="Literary Personality Test">
            <span>Literary Personality Test</span>
        </a>
    </div>

    <div class="button-column">
        <a href="{{site.baseurl}}/bookadaptationchecker" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Book_Adaptations_Checker.png" alt="Book Adaptation Checker">
            <span>Book Adaptation Checker</span>
        </a>

        <a href="{{site.baseurl}}/bookrecommendations" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Book_Recommendations.png" alt="Book Recommendations">
            <span>Book Recommendations</span>
        </a>

        <a href="{{site.baseurl}}/tb" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Database.png" alt="Database">
            <span>Database</span>
        </a>

        <a href="{{site.baseurl}}/blogs" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Database.png" alt="Database">
            <span>Deployment Blog</span>
        </a>
    </div>

    <div class="button-column">
        <a href="{{site.baseurl}}/bookquotes" class="button">
            <img src="{{site.baseurl}}/images/App-Logos/Quotes.png" alt="Book Quotes">
            <span>Manage Quotes</span>
        </a>

        <a href="{{site.baseurl}}/literaryawards" class="button">
            <img src="{{site.baseurl}}/images/windosfolder.png" alt="Literary Awards">
            <span>Manage Awards</span>
        </a>
    </div>
</div>

<footer>
  <p>© 2024 LitConnect | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></p>
</footer>

<script>
    function loadPreferences() {
      fetch('http://127.0.0.1:8103/api/preferences')
        .then(response => response.json())
        .then(data => {
          const menuElement = document.getElementById('menu');
          const textElement = document.getElementById('text');

          if (menuElement) {
            menuElement.innerText = `Menu: ${data.menu}`;
          }

          if (textElement) {
            textElement.innerText = `Text: ${data.text}`;
          }

          let pColors = document.querySelectorAll('p');
          pColors.forEach(p => {
            p.style.color = data.text;
          });

          let menuItems = document.querySelectorAll('.menu-item');
          menuItems.forEach(item => {
            item.style.color = data.menu;
          });
      })
      .catch(error => {
        console.error('Error fetching preferences:', error);
      });
  }

  window.onload = loadPreferences;
</script>