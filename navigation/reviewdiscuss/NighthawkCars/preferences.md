---
layout: page
title: Preferences
description: select page preferences
permalink: /preferences
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select page preferences:</title>
    <style>
        body {
            background: linear-gradient(135deg, #333333, #555555, #000000)
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        button {
            width: 200px;
            padding: 10px;
            background-color: #333;
            color: white;
            border: none;
            cursor: pointer;
            margin: 5px;
        }
        button:hover {
            background-color: #555;
        }
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #333;
            min-width: 200px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }
        .dropdownp4 {
            position: relative;
        }
        .dropdownp4:hover .dropdown-content {
            display: block;
        }
        .dropbtn {
            cursor: pointer;
            background-color: #444;
            padding: 10px;
            color: white;
            border: none;
        }
    </style>
</head>
<body>
<!-- Creating buttons for each color change option -->
    <table>
        <tr>
            <td class="dropdownp4">
                <a class="dropbtn">Background Theme</a>
                <div class="dropdown-content">
                    <button onclick="changeBackground('dark')"><p>Dark</p></button>
                    <button onclick="changeBackground('light')"><p>Light</p></button>
                </div>
            </td>
            <td class="dropdownp4">
                <a class="dropbtn">Menu Theme</a>
                <div class="dropdown-content">
                    <button onclick="changeMenuTheme('dark')"><p>Dark</p></button>
                    <button onclick="changeMenuTheme('light')"><p>Light</p></button>
                    <button onclick="changeMenuTheme('blue')"><p>Blue</p></button>
                    <button onclick="changeMenuTheme('red')"><p>Red</p></button>
                </div>
            </td>
            <td class="dropdownp4">
                <a class="dropbtn">Text Color</a>
                <div class="dropdown-content">
                    <button onclick="changeTextColor('black')"><p>Black</p></button>
                    <button onclick="changeTextColor('white')"><p>White</p></button>
                    <button onclick="changeTextColor('blue')"><p>Blue</p></button>
                    <button onclick="changeTextColor('red')"><p>Red</p></button>
                </div>
            </td>     
        </tr>
        <br>
        <br>
        <br>
        <!-- p object to check if colors changed -->
        <p>This is a test paragraph for colors</p>
    </table>
    <script>
        function changeBackground(theme) {
            if (theme === 'dark') {
                document.body.style.background = 'linear-gradient(135deg, #333333, #555555, #000000)';
                // Change text color to light (white)
            } else if (theme === 'light') {
                document.body.style.background = 'linear-gradient(135deg, #ffffff, #f0f0f0, #cccccc)';
            }
        }
        function changeMenuTheme(theme) {
            // creating list to store colors
            const colors2 = ["white", "black", "blue", "red"];
            const menuElements = document.querySelectorAll('.dropbtn');
            // changing color based on button clicked
            menuElements.forEach(button => {
                if (theme === 'dark') {
                    button.style.backgroundColor = colors2[1];
                    button.style.color = 'white';
                } else if (theme === 'light') {
                    button.style.backgroundColor = colors2[0];
                    button.style.color = 'black';
                } else if (theme === 'blue') {
                    button.style.backgroundColor = colors2[2];
                    button.style.color = 'white';
                } else if (theme === 'red') {
                    button.style.backgroundColor = colors2[3];
                    button.style.color = 'white';
                }
            });
        }
        function changeTextColor(theme) {
            // creating list to store colors
            const menuElements = document.querySelectorAll('p');
            // changing color based on button clicked
            menuElements.forEach(p => {
                p.style.color = theme;
            });
        }
    </script>
</body>
</html>
