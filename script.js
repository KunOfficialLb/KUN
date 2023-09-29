// JavaScript code for interactive neon background with ripple effect
const neonContainer = document.querySelector('.neon-container');
const neonBackground = document.querySelector('.neon-background');

neonContainer.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const backgroundX = mouseX * 5; // Adjust the sensitivity as needed
    const backgroundY = mouseY * 5; // Adjust the sensitivity as needed
    neonBackground.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
});

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
});

// Automatic Carousel
const carousels = document.querySelectorAll('.instagram-carousel');

carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    setInterval(nextSlide, 10000); // Switch slides every 10 seconds
    updateCarousel();
});
``
