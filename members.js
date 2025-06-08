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

  // Smooth scrolling and interactions
        function scrollToMembership() {
            document.querySelector('.membership-types').scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Payment modal functionality
        function showPaymentInfo(type) {
            const modal = document.getElementById('paymentModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');
            
            let content = '';
            
            switch(type) {
                case 'quarterly':
                    modalTitle.textContent = 'Quarterly Membership Payment';
                    content = `
                        <div class="payment-info">
                            <h4>Payment Details</h4>
                            <p><strong>Amount:</strong> Ksh 2,800</p>
                            <p><strong>Breakdown:</strong> Ksh 1,800 (quarterly) + Ksh 1,000 (annual renewal)</p>
                            <div class="payment-steps">
                                <h5>Steps to Join:</h5>
                                <ol>
                                    <li>Make payment of Ksh 2,800 to our payment details</li>
                                    <li>Fill in the membership form</li>
                                    <li>Wait for confirmation</li>
                                </ol>
                            </div>
                            <button class="form-btn">Fill Membership Form</button>
                        </div>
                    `;
                    break;
                case 'annual':
                    modalTitle.textContent = 'Annual Membership Payment';
                    content = `
                        <div class="payment-info">
                            <h4>Payment Details</h4>
                            <p><strong>Amount:</strong> Ksh 8,200</p>
                            <p><strong>Breakdown:</strong> Ksh 7,200 (subscription) + Ksh 1,000 (renewal)</p>
                            <p><em>Pro-rated if joining mid-year</em></p>
                            <div class="payment-steps">
                                <h5>Steps to Join:</h5>
                                <ol>
                                    <li>Make payment of Ksh 8,200 to our payment details</li>
                                    <li>Fill in the membership form</li>
                                    <li>Wait for confirmation</li>
                                </ol>
                            </div>
                            <button class="form-btn">Fill Membership Form</button>
                        </div>
                    `;
                    break;
                case 'guest':
                    modalTitle.textContent = 'Guest Runner Payment';
                    content = `
                        <div class="payment-info">
                            <h4>Payment Details</h4>
                            <p><strong>Amount:</strong> Ksh 600 per event</p>
                            <p><strong>Payment:</strong> Must be made in advance</p>
                            <div class="payment-steps">
                                <h5>What's Included:</h5>
                                <ul>
                                    <li>Full support during the run</li>
                                    <li>Water and fruits</li>
                                    <li>Community experience</li>
                                </ul>
                                <h5>Payment Options:</h5>
                                <ul>
                                    <li>Pay via our payment details</li>
                                    <li>Pay through <a href="https://lu.ma/user/Urbanswaras" target="_blank">Luma</a></li>
                                </ul>
                            </div>
                        </div>
                    `;
                    break;
            }
            
            modalBody.innerHTML = content;
            modal.style.display = 'block';
            
            // Add entrance animation
            setTimeout(() => {
                modal.querySelector('.modal-content').style.opacity = '1';
                modal.querySelector('.modal-content').style.transform = 'translateY(0)';
            }, 10);
        }

        function closeModal() {
            const modal = document.getElementById('paymentModal');
            modal.style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('paymentModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Scroll animations
        function animateOnScroll() {
            const cards = document.querySelectorAll('.membership-card, .review-card, .content-card');
            
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const cardVisible = 150;
                
                if (cardTop < window.innerHeight - cardVisible) {
                    card.classList.add('animate-in');
                }
            });
        }

        // Hero animations
        function initHeroAnimations() {
            const runners = document.querySelectorAll('.running-icons i');
            runners.forEach((runner, index) => {
                setTimeout(() => {
                    runner.style.animation = `runAcross 8s linear infinite`;
                    runner.style.animationDelay = `${index * 2}s`;
                }, index * 1000);
            });
        }

        // Initialize on load
        window.addEventListener('load', () => {
            animateOnScroll();
            initHeroAnimations();
        });

        window.addEventListener('scroll', animateOnScroll);

        // Add interactive hover effects to cards
        document.addEventListener('DOMContentLoaded', function() {
            const membershipCards = document.querySelectorAll('.membership-card');
            
            membershipCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });