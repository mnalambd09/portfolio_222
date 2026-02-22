// 1. Initialize AOS (Scroll Animations)
AOS.init({
    duration: 1000,
    once: true
});

// 2. Typing Effect
var typed = new Typed(".typing-text", {
    strings: ["Web Developer", "App Designer", "UI/UX Expert", "Content Creator"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

// 3. Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 4. Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '20px 8%';
    }
});