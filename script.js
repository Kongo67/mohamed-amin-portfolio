document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Contact form handling (Let the form submit normally to backend service)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Do not prevent default so the form can submit to FormSubmit
        });
    }

    // Image enhancements: lazy-load and fallback for missing images
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
        img.addEventListener('error', () => {
            img.style.opacity = '0.6';
            img.style.objectFit = 'cover';
            img.alt = img.alt ? img.alt + ' (image missing)' : 'image missing';
            img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
                    <rect width="100%" height="100%" fill="#f0f0f0"/>
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#888" font-size="20">Image not found</text>
                </svg>`
            );
        }, { once: true });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
