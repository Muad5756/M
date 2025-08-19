function showPage(pageId) {
            // Hide all pages with smooth transition
            const pages = document.querySelectorAll('.page-content');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.style.opacity = '0';
                page.style.transform = 'translateY(20px)';
            });
            
            // Show selected page with animation
            setTimeout(() => {
                const targetPage = document.getElementById(pageId + '-page');
                targetPage.classList.remove('hidden');
                setTimeout(() => {
                    targetPage.style.opacity = '1';
                    targetPage.style.transform = 'translateY(0)';
                }, 50);
            }, 150);
            
            // Update navigation with enhanced effects
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Trigger fade-in animations for new page content
            setTimeout(() => {
                const fadeElements = document.querySelectorAll(`#${pageId}-page .fade-in`);
                fadeElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.animationDelay = `${index * 0.1}s`;
                        el.classList.add('fade-in');
                    }, index * 100);
                });
            }, 300);
        }
        
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        }
        
        // Enhanced intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Initialize animations and interactions
        document.addEventListener('DOMContentLoaded', () => {
            // Observe elements for animation
            const animatedElements = document.querySelectorAll('.fade-in, .card-hover');
            animatedElements.forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
            
            // Add smooth hover effects to all interactive elements
            const interactiveElements = document.querySelectorAll('.micro-hover, .card-hover, .btn-primary, .btn-secondary');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', function() {
                    this.style.transform = this.style.transform.replace('scale(1)', '') + ' scale(1.05)';
                });
                el.addEventListener('mouseleave', function() {
                    this.style.transform = this.style.transform.replace('scale(1.05)', '');
                });
            });
            
            // Initialize staggered animations
            const staggerElements = document.querySelectorAll('[class*="stagger-"]');
            staggerElements.forEach(el => {
                const staggerClass = Array.from(el.classList).find(cls => cls.startsWith('stagger-'));
                if (staggerClass) {
                    const delay = parseInt(staggerClass.split('-')[1]) * 0.1;
                    el.style.animationDelay = `${delay}s`;
                }
            });
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'971911c1a0bf6f37',t:'MTc1NTYwMDQxMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
