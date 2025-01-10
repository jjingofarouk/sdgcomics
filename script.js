   <script>
        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true
        });

        // Navigation toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const nav = document.querySelector('.nav');
        let lastScroll = 0;

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Scroll behavior
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add scrolled class for visual changes
            if (currentScroll > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });

        // Your existing CountUp code remains the same
        const options = {
            duration: 2.5,
            useGrouping: true,
            useEasing: true
        };

        const countUpElements = [
            { id: 'stat1', target: 34, suffix: '+' },
            { id: 'stat2', target: 17, suffix: '' },
            { id: 'stat3', target: 28, suffix: '' }
        ];

        function startCountingWhenVisible(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const data = countUpElements.find(item => item.id === element.id);
                    if (data) {
                        const countUp = new CountUp(element.id, data.target, {
                            ...options,
                            suffix: data.suffix
                        });
                        countUp.start();
                        observer.unobserve(element);
                    }
                }
            });
        }

        const observer = new IntersectionObserver(startCountingWhenVisible, {
            threshold: 0.5
        });

        countUpElements.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });
    </script>
