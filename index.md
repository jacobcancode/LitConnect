---
layout: post
title: Welcome to LitConnect—Where Ideas Meet and Books Come Alive
search_exclude: true
description: A social connectivity website made to foster engagement between readers. Click on top headers to view our main pages, or click on these links!
hide: true
menu: nav/home.html
---
<table>
    <tr>
        <td id="createandcompete" class="dropdownp4">
            <a href="{{site.baseurl}}/voteforthegoat/home">
                <img src="{{site.baseurl}}/images/favicon.ico" alt="Icon">
            </a>
        </td>
        <td class="dropdownp4">
            <a class="dropbtn">Intro</a>
            <div class="dropdown-content">
                <a href="{{site.baseurl}}/backend_a">Personallized Reading List Fun</a>
                <a href="{{site.baseurl}}/backend_s">About Creators</a>
                <a href="{{site.baseurl}}/preferences_2">Preferences</a>
            </div>
        </td>
    </tr>
</table>

<a href="{{site.baseurl}}/preferences">Page Preferences</a>

<img src="https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png">

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
          item.style.color = data.menu;  // Apply menu color to each item
        });
      })
      .catch(error => {
        console.error('Error fetching preferences:', error);
      });
  }

  // Load preferences when the page is loaded
  window.onload = loadPreferences;
</script>
