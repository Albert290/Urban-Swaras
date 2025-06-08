document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        // Toggle menu visibility
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('no-scroll');
        
        // Toggle icon between hamburger and close (X)
        const icon = hamburger.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('no-scroll');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header-container') && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('no-scroll');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        }
    });
});

 // Scroll animation observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with scroll-animation class
        document.querySelectorAll('.scroll-animation').forEach(el => {
            observer.observe(el);
        });

        // Add stagger effect to committee members
        document.addEventListener('DOMContentLoaded', function() {
            const committeeMembers = document.querySelectorAll('.committee-member');
            committeeMembers.forEach((member, index) => {
                member.style.animationDelay = `${index * 0.1}s`;
            });

            const creMembers = document.querySelectorAll('.cre-member');
            creMembers.forEach((member, index) => {
                member.style.animationDelay = `${index * 0.05}s`;
            });
        });

        // Smooth scroll for document links (when real links are added)
        document.querySelectorAll('.document-link').forEach(link => {
            link.addEventListener('click', function(e) {
                // Add actual link functionality here when documents are ready
                console.log('Document link clicked:', this.previousElementSibling.textContent);
            });
        });

        // Add subtle parallax effect to floating icons
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelectorAll('.floating-icon');
            
            parallax.forEach((icon, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                icon.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.01}deg)`;
            });
        });