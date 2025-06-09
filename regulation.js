 // Mobile menu functionality
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const closeMenu = document.getElementById('closeMenu');
        
        function openMobileMenu() {
            mobileMenu.classList.add('active');
            mobileOverlay.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Event listeners
        hamburger.addEventListener('click', openMobileMenu);
        closeMenu.addEventListener('click', closeMobileMenu);
        mobileOverlay.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking on a link
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Active page highlighting (simulate)
        function setActivePage() {
            const currentPage = window.location.pathname;
            const navItems = document.querySelectorAll('.nav-item, .mobile-item');
            
            navItems.forEach(item => {
                const link = item.querySelector('a');
                if (link && link.getAttribute('href') === currentPage) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header scroll effect
        let lastScrollTop = 0;
        const header = document.querySelector('.main-header');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('scrolled-down');
            } else {
                header.classList.remove('scrolled-down');
            }
            
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
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