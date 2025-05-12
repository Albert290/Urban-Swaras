document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    document.body.appendChild(mobileMenuOverlay);

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        
        // Toggle between hamburger and close icon
        if (mobileMenu.classList.contains('active')) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    }

    // Hamburger click event
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering the document click
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu.classList.contains('active') && 
            !e.target.closest('.mobile-menu') && 
            !e.target.closest('.hamburger')) {
            toggleMenu();
        }
    });

    // Close menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});


// Animation for hero section
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for CTA buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation class when hero section is in view
    const hero = document.querySelector('.hero');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(hero);
});

// Animate counting numbers
function animateNumbers() {
    const achievementNumbers = document.querySelectorAll('.number');
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    
    achievementNumbers.forEach(numberElement => {
        const targetNumber = parseInt(numberElement.textContent);
        const startNumber = 0;
        const prefix = numberElement.textContent.match(/[+]/)?.[0] || '';
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentNumber = Math.floor(progress * (targetNumber - startNumber) + startNumber);
            numberElement.textContent = prefix + currentNumber;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    });
}

// Trigger when hero section is in view
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.hero'));
});

// Countdown Timer
    function updateCountdown() {
        const eventDate = new Date("May 30, 2025 18:00:00").getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

 

// Card hover effect enhancement
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.image-overlay').style.opacity = '0.7';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.image-overlay').style.opacity = '1';
    });
});