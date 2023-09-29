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

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Prev';
    prevButton.addEventListener('click', prevSlide);

    const nav = document.createElement('div');
    nav.classList.add('carousel-nav');
    nav.appendChild(prevButton);
    nav.appendChild(nextButton);

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
    ripple.style.top = `${mouseY - size / 2
