---
layout: post 
title: Author Spotlight
search_exclude: true
permalink: /create_and_compete/home
menu: nav/create_and_compete.html
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Author Spotlights</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #f9f9f9;
            color: #333; /* Updated text color for better contrast */
            line-height: 1.6;
        }

        header {
            background: linear-gradient(to right, #3b82f6, #1d4ed8);
            color: #fff;
            text-align: center;
            padding: 2rem 0;
        }

        header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }

        header p {
            font-size: 1.2rem;
            opacity: 0.8;
        }

        .container {
            max-width: 1100px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .author-card {
            background: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            margin: 1.5rem 0;
            display: flex;
            flex-wrap: wrap;
        }

        .author-card img {
            width: 250px;
            object-fit: cover;
            flex-shrink: 0;
        }

        .author-info {
            padding: 1.5rem;
            flex: 1;
            color: #333; /* Ensures the text is dark enough for better readability */
        }

        .author-info h2 {
            margin-bottom: 0.5rem;
            color: #1d4ed8;
        }

        .author-info p {
            margin-bottom: 1rem;
        }

        .author-info ul {
            margin: 0.5rem 0 0 1rem;
        }

        footer {
            text-align: center;
            padding: 1rem;
            background-color: #1d4ed8;
            color: #f9f9f9; /* Updated to ensure good contrast with the blue background */
            margin-top: 2rem;
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header>
        <h1>Author Spotlights</h1>
        <p>Celebrating iconic authors and their greatest works</p>
    </header>

    <!-- Author Cards -->
    <div class="container">
        <!-- Author 1 -->
        <div class="author-card">
            <img src="{{site.baseurl}}/images/jk.png" alt="J.K. Rowling">
            <div class="author-info">
                <h2>J.K. Rowling</h2>
                <p>J.K. Rowling is the British author best known for the *Harry Potter* series, which became a global phenomenon and changed children's literature forever.</p>
                <strong>Notable Works:</strong>
                <ul>
                    <li>Harry Potter and the Sorcerer's Stone</li>
                    <li>Harry Potter and the Chamber of Secrets</li>
                    <li>Fantastic Beasts and Where to Find Them</li>
                </ul>
            </div>
        </div>

        <!-- Author 2 -->
        <div class="author-card">
            <img src="{{site.baseurl}}/images/george.png" alt="George Orwell">
            <div class="author-info">
                <h2>George Orwell</h2>
                <p>George Orwell, an English novelist and essayist, is famous for his dystopian novels that explore themes of totalitarianism and freedom.</p>
                <strong>Notable Works:</strong>
                <ul>
                    <li>1984</li>
                    <li>Animal Farm</li>
                    <li>Homage to Catalonia</li>
                </ul>
            </div>
        </div>

        <!-- Author 3 -->
        <div class="author-card">
            <img src="{{site.baseurl}}/images/test.png" alt="Jane Austen">
            <div class="author-info">
                <h2>Jane Austen</h2>
                <p>Jane Austen was an English novelist known for her keen social commentary and depiction of early 19th-century life.</p>
                <strong>Notable Works:</strong>
                <ul>
                    <li>Pride and Prejudice</li>
                    <li>Sense and Sensibility</li>
                    <li>Emma</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        &copy; 2024 Global Reading Recommendations | Made with ❤️
    </footer>

</body>
</html>
