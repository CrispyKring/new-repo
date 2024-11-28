<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website with Burger Menu</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #333;
      color: white;
    }

    .menu-icon {
      font-size: 1.5rem;
      cursor: pointer;
    }

    .menu {
      position: fixed;
      top: 0;
      left: -250px;
      width: 250px;
      height: 100%;
      background-color: #444;
      color: white;
      padding: 2rem 1rem;
      transition: left 0.3s ease;
    }

    .menu.active {
      left: 0;
    }

    .menu ul {
      list-style: none;
      padding: 0;
    }

    .menu ul li {
      margin: 1rem 0;
    }

    .menu ul li a {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
    }

    main {
      padding: 2rem;
    }

    .overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 5;
    }

    .overlay.active {
      display: block;
    }
  </style>
</head>
<body>
  <header>
    <h1>Home Page</h1>
    <div class="menu-icon" onclick="toggleMenu()">☰</div>
  </header>

  <div class="overlay" onclick="toggleMenu()"></div>

  <nav class="menu">
    <ul>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#websites">Websites</a></li>
    </ul>
  </nav>

  <main>
    <section id="about">
      <h2>About Us</h2>
      <p>Welcome to our website! We are dedicated to providing the best services to our users.</p>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <p>You can reach us at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
    </section>

    <section id="websites">
      <h2>Websites</h2>
      <p>Check out our featured websites and projects.</p>
    </section>
  </main>

  <script>
    function toggleMenu() {
      const menu = document.querySelector('.menu');
      const overlay = document.querySelector('.overlay');
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  </script>
</body>
</html>
