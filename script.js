// JavaScript code for interactive background
const neonBackground = document.querySelector('.neon-background');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    // Adjust the background position based on mouse cursor
    neonBackground.style.backgroundPosition = `${mouseX * 200}% ${mouseY * 200}%`;
});
