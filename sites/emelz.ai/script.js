// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const headerContainer = document.querySelector('.header-container');
    const logo = document.querySelector('.logo');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerContainer.classList.add('scrolled');
            logo.classList.add('scrolled');
        } else {
            headerContainer.classList.remove('scrolled');
            logo.classList.remove('scrolled');
        }
    });

    // Fade-in animation for app cards
    const appCards = document.querySelectorAll('.app-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    appCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        if (hero) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
}); 