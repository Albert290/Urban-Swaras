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

document.addEventListener('DOMContentLoaded', function() { 
     // Accordion functionality
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const content = header.nextElementSibling;
                
                // Close other items
                document.querySelectorAll('.accordion-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }
            });
        });

        // Open first accordion by default
        document.querySelector('.accordion-item').classList.add('active');
        document.querySelector('.accordion-content').style.maxHeight = 
            document.querySelector('.accordion-content').scrollHeight + 'px';
});

// Toggle document viewer
        function toggleDocument(type) {
            const viewer = document.getElementById('privacy-viewer');
            const isVisible = viewer.style.display === 'block';
            
            if (isVisible) {
                closeDocument();
            } else {
                viewer.style.display = 'block';
                viewer.scrollIntoView({ behavior: 'smooth' });
                // Add animation
                setTimeout(() => {
                    viewer.classList.add('animate-in');
                }, 100);
            }
        }

        function closeDocument() {
            const viewer = document.getElementById('privacy-viewer');
            viewer.classList.remove('animate-in');
            setTimeout(() => {
                viewer.style.display = 'none';
            }, 300);
        }

        // Toggle dropdown menus
        function toggleDropdown(type) {
            const dropdown = document.getElementById(type + '-dropdown');
            const allDropdowns = document.querySelectorAll('.dropdown-menu');
            
            // Close all other dropdowns
            allDropdowns.forEach(menu => {
                if (menu !== dropdown) {
                    menu.classList.remove('show');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('show');
        }

        // Download functionality with notification
        function downloadDocument(type) {
            showDownloadNotification();
            
            // Simulate download (in real implementation, this would trigger actual file download)
            console.log('Downloading:', type);
            
            // Close any open dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }

        function showDownloadNotification() {
            const notification = document.getElementById('downloadNotification');
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.download-card')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });

        // Scroll animations
        function animateOnScroll() {
            const cards = document.querySelectorAll('.download-card');
            
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const cardVisible = 150;
                
                if (cardTop < window.innerHeight - cardVisible) {
                    card.classList.add('animate-in');
                }
            });
        }

        // Initialize animations
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);

        // Add hover effects to cards
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.download-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });