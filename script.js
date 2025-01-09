// Navigation scroll and hamburger menu functionality
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
let lastScroll = 0;

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Hide navigation on scroll down, show on scroll up
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll <= 0) {
        nav.classList.remove('hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('hidden')) {
        // Scrolling down
        nav.classList.add('hidden');
    } else if (currentScroll < lastScroll && nav.classList.contains('hidden')) {
        // Scrolling up
        nav.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
