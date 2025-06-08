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

// Toggle expandable content
        function toggleContent() {
            const content = document.getElementById('expandableContent');
            const button = document.querySelector('.read-more-btn');
            const buttonText = document.getElementById('readMoreText');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                button.classList.remove('expanded');
                buttonText.textContent = 'Read More About Us';
            } else {
                content.classList.add('expanded');
                button.classList.add('expanded');
                buttonText.textContent = 'Show Less';
            }
        }

        // Animated counter for achievement numbers
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + (target >= 200 ? '+' : '+');
            }, 20);
        }

        // Initialize counters when page loads
        document.addEventListener('DOMContentLoaded', function() {
            const counters = document.querySelectorAll('.number');
            
            // Intersection Observer to trigger animation when in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.getAttribute('data-count'));
                        animateCounter(entry.target, target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            counters.forEach(counter => {
                observer.observe(counter);
            });
        });

        // Smooth scroll for internal links
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

        // Hide scroll indicator when user scrolls
        window.addEventListener('scroll', function() {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });

// Simple Our Story Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe story content
    const storyContent = document.querySelector('.story-content');
    if (storyContent) {
        observer.observe(storyContent);
    }

    // Timeline point interactions
    const timelinePoints = document.querySelectorAll('.timeline-point');
    
    timelinePoints.forEach(point => {
        // Click effect
        point.addEventListener('click', function() {
            // Remove active class from all points
            timelinePoints.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked point
            this.classList.add('active');
            
            // Create ripple effect
            createRipple(this);
        });

        // Enhanced hover effects
        point.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });

        point.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Ripple effect function
    function createRipple(element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            background: rgba(245, 124, 81, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: ripple-expand 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }

    // Add CSS animation for ripple
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-expand {
            to {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
        
        .timeline-point.active .point-icon {
            background: var(--accent) !important;
            transform: scale(1.1);
            box-shadow: 0 10px 30px rgba(245, 124, 81, 0.5);
        }
        
        .timeline-point.active .point-icon i {
            color: var(--white) !important;
        }
        
        .timeline-point.active .point-year,
        .timeline-point.active .point-label {
            background: var(--secondary) !important;
            color: var(--white) !important;
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll reveal for paragraphs
    const paragraphs = document.querySelectorAll('.story-paragraph');
    
    const paragraphObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    paragraphs.forEach(paragraph => {
        paragraph.style.animationPlayState = 'paused';
        paragraphObserver.observe(paragraph);
    });

    // Timeline line animation on scroll
    const timelineLine = document.querySelector('.timeline-line');
    const timelineContainer = document.querySelector('.timeline-container');
    
    const lineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineLine.style.animationPlayState = 'running';
                
                // Stagger timeline point animations
                timelinePoints.forEach((point, index) => {
                    setTimeout(() => {
                        point.style.animationPlayState = 'running';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.3 });

    if (timelineContainer) {
        timelineLine.style.animationPlayState = 'paused';
        timelinePoints.forEach(point => {
            point.style.animationPlayState = 'paused';
        });
        lineObserver.observe(timelineContainer);
    }

    // Add subtle parallax effect to story content
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const storySection = document.querySelector('.our-story');
        
        if (storySection) {
            const rect = storySection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const rate = scrolled * 0.1;
                storyContent.style.transform = `translateY(${rate}px)`;
            }
        }
    });

    // Auto-highlight timeline points as user scrolls through paragraphs
    const highlightTimeline = function() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        paragraphs.forEach((paragraph, index) => {
            const rect = paragraph.getBoundingClientRect();
            const absoluteTop = rect.top + window.scrollY;
            
            if (scrollPosition >= absoluteTop && scrollPosition < absoluteTop + paragraph.offsetHeight) {
                // Highlight corresponding timeline point
                timelinePoints.forEach(point => point.classList.remove('highlight'));
                if (timelinePoints[index]) {
                    timelinePoints[index].classList.add('highlight');
                }
            }
        });
    };

    // Add highlight styles
    const highlightStyle = document.createElement('style');
    highlightStyle.textContent = `
        .timeline-point.highlight .point-icon {
            background: var(--secondary);
            border-color: var(--secondary);
            animation: pulse-highlight 2s ease-in-out infinite;
        }
        
        .timeline-point.highlight .point-icon i {
            color: var(--white);
        }
        
        @keyframes pulse-highlight {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(highlightStyle);

    // Throttled scroll listener
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(highlightTimeline, 10);
    });
});