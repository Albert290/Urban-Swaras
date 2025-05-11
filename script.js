 // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Change hamburger icon
            if (mobileMenu.classList.contains('active')) {
                hamburger.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-links a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Highlight current page in navigation
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.parentElement.classList.add('active');
            }
        });