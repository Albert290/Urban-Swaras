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

 // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            observer.observe(card);
        });

        // Add interactive hover effects
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });

            // Add click animation
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-5px) scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                }, 150);
            });
        });

        // Smooth scroll effect for better UX
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            const background = document.querySelector('.how-we-run-section::before');
            if (background) {
                background.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });

        // Add keyboard navigation support
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Feature ${index + 1}: ${card.querySelector('.feature-title').textContent}`);
            
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });

// Calendar Section Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all interactive features
    initializeCalendarFeatures();
    initializeScrollAnimations();
    initializeLoadingSpinner();
    initializeButtonEffects();
    initializeAccessibility();
    initializePerformanceOptimizations();

    // Main initialization function
    function initializeCalendarFeatures() {
        console.log('Calendar section initialized');
        
        // Add smooth scrolling for internal links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });
    }

    // Smooth scrolling function
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Intersection Observer for scroll animations
    function initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Trigger counter animations if present
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        animateCounter(counter);
                    });
                }
            });
        }, observerOptions);

        // Observe animated elements
        const animatedElements = document.querySelectorAll('.info-card, .calendar-embed-container');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Counter animation function
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    }

    // Loading spinner for iframe
    function initializeLoadingSpinner() {
        const iframe = document.getElementById('calendar-iframe');
        const spinner = document.querySelector('.loading-spinner');

        if (iframe && spinner) {
            iframe.addEventListener('load', function() {
                spinner.style.opacity = '0';
                setTimeout(() => {
                    spinner.style.display = 'none';
                }, 300);
            });

            // Fallback timeout
            setTimeout(() => {
                if (spinner) {
                    spinner.style.opacity = '0';
                    setTimeout(() => {
                        spinner.style.display = 'none';
                    }, 300);
                }
            }, 5000);
        }
    }

    // Enhanced button effects
    function initializeButtonEffects() {
        const button = document.querySelector('.add-to-calendar');
        
        if (button) {
            // Ripple effect on click
            button.addEventListener('click', function(e) {
                const ripple = this.querySelector('.button-ripple');
                if (ripple) {
                    ripple.style.width = '0';
                    ripple.style.height = '0';
                    setTimeout(() => {
                        ripple.style.width = '300px';
                        ripple.style.height = '300px';
                    }, 10);
                }

                // Haptic feedback for mobile
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            });

            // Magnetic effect on hover (desktop)
            if (window.innerWidth > 768) {
                button.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    this.style.transform = `translateY(-3px) translate(${x * 0.1}px, ${y * 0.1}px)`;
                });

                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            }
        }
    }

    // Accessibility enhancements
    function initializeAccessibility() {
        // Add ARIA labels and roles
        const infoCards = document.querySelectorAll('.info-card');
        infoCards.forEach((card, index) => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'article');
            card.setAttribute('aria-label', `Information card ${index + 1}`);
            
            // Keyboard navigation
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });

        // Add focus indicators
        const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--secondary)';
                this.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });

        // Screen reader announcements
        const calendarSection = document.querySelector('.calendar-section');
        if (calendarSection) {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = 'Urban Swaras Events calendar section loaded successfully';
            calendarSection.appendChild(announcement);
        }
    }

    // Performance optimizations
    function initializePerformanceOptimizations() {
        // Lazy load iframe if supported
        const iframe = document.getElementById('calendar-iframe');
        if (iframe && 'loading' in HTMLIFrameElement.prototype) {
            iframe.loading = 'lazy';
        }

        // Optimize animations based on device performance
        const isLowPerformanceDevice = navigator.hardwareConcurrency <= 2 || 
            (navigator.deviceMemory && navigator.deviceMemory <= 4);

        if (isLowPerformanceDevice) {
            document.body.classList.add('reduced-animations');
        }

        // Preload critical resources
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        preloadLink.as = 'style';
        document.head.appendChild(preloadLink);
    }

    // Parallax effect for hero section
    function initializeParallaxEffect() {
        const hero = document.querySelector('.calendar-hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent && window.innerWidth > 768) {
            window.addEventListener('scroll', throttle(() => {
                const scrolled = window.pageYOffset;
                const heroHeight = hero.offsetHeight;
                const scrollRatio = scrolled / heroHeight;
                
                if (scrollRatio <= 1) {
                    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                    hero.style.opacity = 1 - scrollRatio * 0.5;
                }
            }, 16));
        }
    }

    // Theme detection and adaptation
    function initializeThemeDetection() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        function handleThemeChange(e) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }

        prefersDark.addListener(handleThemeChange);
        handleThemeChange(prefersDark);
    }

    // Utility functions
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('Calendar section error:', e.error);
        // Could implement error reporting here
    });

    // Initialize additional features
    initializeParallaxEffect();
    initializeThemeDetection();

    // Cleanup function for when page is unloaded
    window.addEventListener('beforeunload', function() {
        // Clean up any intervals, timeouts, or event listeners
        console.log('Calendar section cleanup');
    });

    // Custom events for integration        
});

