// JavaScript code for interactive neon background
const body = document.body;

body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    body.style.background = `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, #ff00ff, transparent)`;
});
