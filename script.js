// JavaScript code for interactive neon background with ripple effect
const neonContainer = document.querySelector('.neon-container');
const neonBackground = document.querySelector('.neon-background');

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
    const backgroundX = mouseX * 100;
    const backgroundY = mouseY * 100;
    neonBackground.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
});
