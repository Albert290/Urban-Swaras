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
