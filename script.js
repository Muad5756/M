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
        
        function toggleContentDropdown(type) {
            const professionalContent = document.getElementById('professional-content');
            const creativeContent = document.getElementById('creative-content');
            const graphicContent = document.getElementById('graphic-content');
            const professionalArrow = document.getElementById('professional-arrow');
            const creativeArrow = document.getElementById('creative-arrow');
            const graphicArrow = document.getElementById('graphic-arrow');
            
            if (type === 'professional') {
                // Toggle professional content
                if (professionalContent.classList.contains('hidden')) {
                    // Show professional, hide others
                    professionalContent.classList.remove('hidden');
                    creativeContent.classList.add('hidden');
                    graphicContent.classList.add('hidden');
                    professionalArrow.style.transform = 'rotate(180deg)';
                    creativeArrow.style.transform = 'rotate(0deg)';
                    graphicArrow.style.transform = 'rotate(0deg)';
                    
                    // Add animation
                    setTimeout(() => {
                        professionalContent.classList.add('dropdown-enter-active');
                    }, 50);
                } else {
                    // Hide professional
                    professionalContent.classList.add('hidden');
                    professionalArrow.style.transform = 'rotate(0deg)';
                    professionalContent.classList.remove('dropdown-enter-active');
                }
            } else if (type === 'creative') {
                // Toggle creative content
                if (creativeContent.classList.contains('hidden')) {
                    // Show creative, hide others
                    creativeContent.classList.remove('hidden');
                    professionalContent.classList.add('hidden');
                    graphicContent.classList.add('hidden');
                    creativeArrow.style.transform = 'rotate(180deg)';
                    professionalArrow.style.transform = 'rotate(0deg)';
                    graphicArrow.style.transform = 'rotate(0deg)';
                    
                    // Add animation
                    setTimeout(() => {
                        creativeContent.classList.add('dropdown-enter-active');
                    }, 50);
                } else {
                    // Hide creative
                    creativeContent.classList.add('hidden');
                    creativeArrow.style.transform = 'rotate(0deg)';
                    creativeContent.classList.remove('dropdown-enter-active');
                }
            } else if (type === 'graphic') {
                // Toggle graphic content
                if (graphicContent.classList.contains('hidden')) {
                    // Show graphic, hide others
                    graphicContent.classList.remove('hidden');
                    professionalContent.classList.add('hidden');
                    creativeContent.classList.add('hidden');
                    graphicArrow.style.transform = 'rotate(180deg)';
                    professionalArrow.style.transform = 'rotate(0deg)';
                    creativeArrow.style.transform = 'rotate(0deg)';
                    
                    // Add animation
                    setTimeout(() => {
                        graphicContent.classList.add('dropdown-enter-active');
                    }, 50);
                } else {
                    // Hide graphic
                    graphicContent.classList.add('hidden');
                    graphicArrow.style.transform = 'rotate(0deg)';
                    graphicContent.classList.remove('dropdown-enter-active');
                }
            }
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
        
        // Function to update scroll indicators
        function updateScrollIndicators(container, indicatorClass, activeColor) {
            const scrollContainer = container.querySelector('.flex.overflow-x-auto');
            const indicators = container.querySelectorAll(`.${indicatorClass}`);
            const items = scrollContainer.children;
            
            if (items.length === 0) return;
            
            const itemWidth = items[0].offsetWidth + 24; // item width + gap
            const scrollLeft = scrollContainer.scrollLeft;
            const activeIndex = Math.round(scrollLeft / itemWidth);
            
            indicators.forEach((indicator, index) => {
                if (index === activeIndex) {
                    indicator.className = `${indicatorClass} w-3 h-3 ${activeColor} rounded-full opacity-50 transition-all duration-300 cursor-pointer hover:scale-125`;
                } else {
                    indicator.className = `${indicatorClass} w-3 h-3 bg-gray-500 rounded-full opacity-30 transition-all duration-300 cursor-pointer hover:scale-125`;
                }
                indicator.setAttribute('data-index', index);
            });
        }
        
        // Function to scroll to specific item
        function scrollToItem(container, index) {
            const scrollContainer = container.querySelector('.flex.overflow-x-auto');
            const items = scrollContainer.children;
            
            if (items[index]) {
                const itemWidth = items[0].offsetWidth + 24; // item width + gap
                scrollContainer.scrollTo({
                    left: index * itemWidth,
                    behavior: 'smooth'
                });
            }
        }
        
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
            
            // Setup scroll indicators for professional content
            const professionalContainer = document.getElementById('professional-content');
            if (professionalContainer) {
                const professionalScrollContainer = professionalContainer.querySelector('.flex.overflow-x-auto');
                
                // Add scroll event listener
                professionalScrollContainer.addEventListener('scroll', () => {
                    updateScrollIndicators(professionalContainer, 'professional-indicator', 'bg-blue-500');
                });
                
                // Add click event listeners to indicators
                const professionalIndicators = professionalContainer.querySelectorAll('.professional-indicator');
                professionalIndicators.forEach(indicator => {
                    indicator.addEventListener('click', () => {
                        const index = parseInt(indicator.getAttribute('data-index'));
                        scrollToItem(professionalContainer, index);
                    });
                });
            }
            
            // Setup scroll indicators for creative content
            const creativeContainer = document.getElementById('creative-content');
            if (creativeContainer) {
                const creativeScrollContainer = creativeContainer.querySelector('.flex.overflow-x-auto');
                
                // Add scroll event listener
                creativeScrollContainer.addEventListener('scroll', () => {
                    updateScrollIndicators(creativeContainer, 'creative-indicator', 'bg-purple-500');
                });
                
                // Add click event listeners to indicators
                const creativeIndicators = creativeContainer.querySelectorAll('.creative-indicator');
                creativeIndicators.forEach(indicator => {
                    indicator.addEventListener('click', () => {
                        const index = parseInt(indicator.getAttribute('data-index'));
                        scrollToItem(creativeContainer, index);
                    });
                });
            }
            
            // Setup scroll indicators for graphic content
            const graphicContainer = document.getElementById('graphic-content');
            if (graphicContainer) {
                const graphicScrollContainer = graphicContainer.querySelector('.flex.overflow-x-auto');
                
                // Add scroll event listener
                graphicScrollContainer.addEventListener('scroll', () => {
                    updateScrollIndicators(graphicContainer, 'graphic-indicator', 'bg-orange-500');
                });
                
                // Add click event listeners to indicators
                const graphicIndicators = graphicContainer.querySelectorAll('.graphic-indicator');
                graphicIndicators.forEach(indicator => {
                    indicator.addEventListener('click', () => {
                        const index = parseInt(indicator.getAttribute('data-index'));
                        scrollToItem(graphicContainer, index);
                    });
                });
            }
        });