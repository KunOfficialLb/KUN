// JavaScript code for interactive neon background with ripple effect
const neonContainer = document.querySelector('.neon-container');
const neonBackground = document.querySelector('.neon-background');
const carousels = document.querySelectorAll('.instagram-carousel');

carousels.forEach((carousel) => {
    const container = carousel.querySelector('.carousel-container');
    const slides = carousel.querySelectorAll('.carousel-slide');

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function startAutoSlide() {
        setInterval(nextSlide, 10000); // Switch slides every 10 seconds
    }

    // Start auto-slide when the page loads
    startAutoSlide();

    const nav = document.createElement('div');
    nav.classList.add('carousel-nav');
    
    carousel.appendChild(nav);
    updateCarousel();
});

// Function to create a ripple element
function createRipple(event) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    neonContainer.appendChild(ripple);

    const rect = neonContainer.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = `${size}px`;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    ripple.style.left = `${mouseX - size / 2}px`;
    ripple.style.top = `${mouseY - size / 2}px`;

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

neonContainer.addEventListener('click', (event) => {
    createRipple(event);
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = event.clientY / window.innerHeight;

    // Adjust the background position based on mouse cursor
    const backgroundX = mouseX * 5; // Adjust the sensitivity as needed
    const backgroundY = mouseY * 5; // Adjust the sensitivity as needed
    neonBackground.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
});

/* Reset some default styles for better consistency */
body, h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
}

/* Basic styling */
body {
    font-family: Arial, sans-serif;
    background: transparent;
    color: #000;
    overflow: hidden;
    margin: 0;
}

.neon-container {
    position: relative;
}

header {
    background-color: black;
    color: #9900cc;
    text-align: center;
    padding: 20px;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #9900cc;
}

.logo {
    text-align: center;
}

.logo img {
    width: 100px; /* Adjust the size as needed */
}

main {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background: transparent;
    color: #000;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

footer {
    text-align: center;
    padding: 20px;
    background: transparent;
    color: #000;
}

/* Neon Background with Color Palette */
.neon-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    background: radial-gradient(circle, #6e0080, #9900cc, #000066, #9966cc);
    background-size: 200% 200%;
    animation: gradient 5s linear infinite;
}

/* Add this CSS to style the carousel */
.instagram-carousel {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.carousel-container {
    display: flex;
    overflow: hidden;
}

.carousel-slide {
    flex: 0 0 auto;
    width: 100%;
    transition: transform 0.5s ease;
}

.carousel-slide img {
    width: 100%;
    height: auto;
    display: block;
}

/* Style arrows for navigation (optional) */
.carousel-nav {
    text-align: center;
    margin-top: 10px;
}

.carousel-nav button {
    background: #333;
    color: #fff;
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
}

@keyframes gradient {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
}
