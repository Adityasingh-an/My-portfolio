document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic Skills Rendering ---
    const skillsData = [
        { name: 'ReactJS', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M24 12c0-1.18-.81-2.22-1.93-2.61a3.02 3.02 0 0 1-1.11-4.73 3.018 3.018 0 0 0-.25-3.81 3.02 3.02 0 0 0-3.81-.25 3.02 3.02 0 0 1-4.73-1.11C11.78.37 10.97 0 10.03 0c-.94 0-1.75.37-2.14 1.49-.23 1.08-.94 1.95-1.11 4.73a3.02 3.02 0 0 0-.25 3.81 3.02 3.02 0 0 0 3.81.25c.68 1 1.11 2.3 1.11 2.3s.43-1.3 1.11-2.3a3.02 3.02 0 0 0 3.81-.25 3.02 3.02 0 0 0-.25-3.81c-.17-2.78-.88-3.65-1.11-4.73a3.02 3.02 0 0 0-2.14-1.49z" fill="#61DAFB"/></svg>' },
        { name: 'NodeJS', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M12.182 4.41l.142-.24a.63.63 0 0 0 0-.64l-11-19.05a.63.63 0 0 0-1.1 0l-11 19.05a.63.63 0 0 0 0 .64l.142.24L12.182 4.41z" fill="#339933"/></svg>' },
        { name: 'Redux', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M15.83 2.91a.45.45 0 0 0-.58.12l-1.27 1.63a.45.45 0 0 0 .12.63l1.83 1.43a.45.45 0 0 0 .63-.12l1.27-1.63a.45.45 0 0 0-.12-.63l-1.88-1.46zM22.28 12l-1.4-1.84a.45.45 0 0 0-.63-.1l-1.86 1.45a.45.45 0 0 0-.1.63l1.45 1.86a.45.45 0 0 0 .63.1l1.81-1.47a.45.45 0 0 0 .1-.63z" fill="#764ABC"/></svg>' },
        { name: 'Firebase', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M3.89 15.672L6.255.461A.545.545 0 0 1 7.284.22l2.365 4.428-5.759 11.024z" fill="#FFCA28"/></svg>' },
        { name: 'TailwindCSS', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/></svg>' },
        { name: 'HTML5', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.98.804-2.993-.81-.192-2.182H6.274l.324 4.19 5.382 1.456 5.374-1.455.633-7.103H8.531z" fill="#E34F26"/></svg>' },
        { name: 'CSS3', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 14.593l.24 2.483 5.147 1.396 5.15-1.396.33-3.08h-5.48l-.1-.837H17.3l.06-.632.27-2.48H7.4l.118 1.58H14.1l-.185 2.062H7.07l.21 2.48h5.64l.01.002H6.59z" fill="#1572B6"/></svg>' },
        { name: 'JavaScript', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.045-.705.15-.645.975-.75 1.53-.585.57.174.945.615 1.185 1.126l2.313-1.44c-.39-1.036-1.2-2.056-2.956-2.506-1.334-.39-2.73-.06-3.56.765-.93.825-1.14 2.235-.45 3.105.675.855 1.92 1.2 2.806 1.605.615.27.99.525 1.185.975.3.585.06 1.44-.69 1.635-.6.18-1.29-.06-1.785-.525-.525-.51-.81-1.02-1.125-1.845l-2.34 1.35c.42 1.335 1.456 2.505 3.51 2.82 1.62.24 3.42-.165 4.38-1.74.316-.465.48-1.11.39-1.605zm-11.325.225c-.18-.825-.66-1.485-1.395-1.905-.63-.405-1.41-.57-1.965-.87-.315-.15-.405-.315-.405-.6 0-.345.24-.63.855-.81.45-.12.87-.06 1.14.285.24.315.42.75.465 1.275l2.43-.375c-.18-1.47-.945-2.565-2.07-3.12-1.125-.57-2.88-.45-3.84.45-.885.81-1.095 2.145-.255 3.03.615.69 1.635 1.005 2.52 1.365.6.225.855.435.915.75.12.63-.48 1.05-1.095 1.05-.675 0-1.14-.345-1.41-.81-.315-.51-.405-1.14-.42-1.92l-2.445.435c.135 1.62.9 2.88 2.25 3.51 1.2.555 3.015.42 4.155-.45.855-.78 1.14-2.115.66-3.105z" fill="#F7DF1E"/></svg>' },
        { name: 'MongoDB', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M13.633 11.233c-.266-.3-.5-.6-.733-.866.233-.667.6-1.334 1.066-1.9 1.4-.4 2.8-.833 4.2-.833 2.1 0 3.834 1.2 4.2 3.033.4 2.067-.533 4.167-2.4 5.234-1.633.933-3.667.933-5.267.333a5.533 5.533 0 0 1-3.667 3.033c-3 1.133-6.4 0-7.833-2.633-1.467-2.667-.867-6.033 1.467-7.9 2.333-1.867 5.7-1.733 7.867.333z" fill="#47A248"/></svg>' },
        { name: 'MySQL', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.5 18c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm7 0c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z" fill="#4479A1"/></svg>' },
        { name: 'AWS', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M12.91 16.92c-1.2 0-2.11-.2-2.73-.6-.61-.4-.92-1.02-.92-1.85 0-.81.3-1.42.92-1.83.62-.41 1.5-.62 2.65-.62h2.24v-1.03c0-.62-.16-1.11-.47-1.47-.32-.36-.78-.54-1.38-.54-.53 0-.96.14-1.31.42-.34.28-.51.65-.51 1.1h-2.11c0-.52.14-1.01.42-1.46.28-.45.69-.81 1.23-1.08.54-.26 1.19-.39 1.96-.39.77 0 1.45.13 2.05.38.59.25 1.05.6 1.39 1.05.34.45.51.98.51 1.59v5.92c0 .41.05.82.16 1.21.11.39.26.75.45 1.07h-2.26c-.14-.23-.23-.5-.28-.82-.05-.3-.08-.6-.08-.94-.37.74-.82 1.29-1.36 1.66-.54.37-1.17.56-1.88.56zm1 1.52c1.7 0 3.32-.4 4.86-1.2 1.54-.8 2.9-1.86 4.09-3.18 1.19-1.32 2.14-2.82 2.85-4.5.71-1.68 1.07-3.48 1.07-5.4v-.48h-1.92v.48c0 1.84-.36 3.63-1.07 5.37-.71 1.74-1.66 3.31-2.85 4.71-1.19 1.4-2.55 2.53-4.09 3.38-1.54.85-3.16 1.28-4.86 1.28z" fill="#FF9900"/></svg>' },
        { name: 'GitHub', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#FFFFFF"/></svg>' },
        { name: 'git', icon: '<svg viewBox="0 0 24 24" xmlns=http://www.w3.org/2000/svg" width="40" height="40"><path d="'}
    ];

    const renderSkills = () => {
        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = '';
        skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card brand-skill reveal';
            skillCard.setAttribute('data-skill', skill.name.toLowerCase());
            skillCard.innerHTML = `
                <div class="skill-icon">
                    ${skill.icon}
                </div>
                <p>${skill.name}</p>
            `;
            skillsGrid.appendChild(skillCard);
        });

        // Re-initialize observer for new elements
        if (typeof revealOnScroll !== 'undefined') {
            document.querySelectorAll('.skill-card.reveal').forEach(el => revealOnScroll.observe(el));
        }
    };

    // --- Dark/Light Mode Toggle ---
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            // Save preference
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            // Toggle 'active' class on the menu icon and the links list
            mobileMenu.classList.toggle('is-active');
            navLinks.classList.toggle('active');

            // Animation for hamburger bars (optional)
            const bars = document.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (mobileMenu.classList.contains('is-active')) {
                    if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('is-active');

            // Reset hamburger bars
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.section-container, .hero-content, .hero-image, .skill-card, .project-card');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealOnScroll.observe(el));

    // Initial render
    renderSkills();

    // --- Navbar Background Change on Scroll ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
            header.style.padding = '15px 10%';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '20px 10%';
        }
    });

    // --- Form Submission Placeholder ---
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! This is a placeholder.');
            contactForm.reset();
        });
    }

    // --- Dotted Animation Logic ---
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null };
        let scrollY = window.scrollY;

        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', () => {
            setCanvasSize();
            initParticles();
        });

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
                ctx.fillStyle = theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.15)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 300) {
                    let force = (300 - distance) / 300;
                    this.x -= (dx / distance) * force * this.density;
                    this.y -= (dy / distance) * force * this.density;
                } else {
                    this.x += (this.baseX - this.x) / 10;
                    this.y += (this.baseY - this.y) / 10;
                }
                this.y += scrollY * 0.05 * (this.density / 30);
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
        }

        const initParticles = () => {
            particles = [];
            let numberOfParticles = (canvas.width * canvas.height) / 8000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.draw(); p.update(); });
            requestAnimationFrame(animate);
        };

        setCanvasSize();
        initParticles();
        animate();
    }
});
