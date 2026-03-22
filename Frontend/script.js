document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic Skills Rendering ---
    // To add a new skill, just search for it on https://devicon.dev/ and paste its image URL!
    const skillsData = [
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'ReactJS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'NodeJS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Redux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
        { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
        { name: 'TailwindCSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' }
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
                    <img src="${skill.iconUrl}" alt="${skill.name}" loading="lazy" width="40" height="40" style="display: block;">
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

    // --- Contact Form Submission (Web3Forms) ---
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Stop the browser page from reloading

        // 1. Grab the text from the input boxes
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Change the text of the button to show it's sending
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        try {
            // 2. Send the User's Data directly to Web3Forms using FormData
            const accessKey = "e3c1dbf1-df35-4ab4-9486-543f06f8fd10"; 
            
            // Create a FormData object from our form
            const formData = new FormData();
            formData.append("access_key", accessKey);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("message", message);
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                // Don't set Content-Type header when sending FormData!
                body: formData
            });

            const data = await response.json();  

            // 3. Check if Web3Forms successfully sent the email
            if (response.status === 200) {
                alert('🎉 Message sent successfully! I will get back to you soon.');
                contactForm.reset(); // Clear out the input boxes
            } else {
                alert('Oops! Something went wrong: ' + data.message);
            }

        } catch (error) {
            console.error("Fetch error:", error);
            alert('Error: Could not send the message. Please try again later.');
        } finally {
            // Reset button text
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}


    // --- Rotating Text Effect ---
    const rotatingTextElement = document.querySelector('.rotating-text');
    if (rotatingTextElement) {
        const roles = rotatingTextElement.getAttribute('data-roles').split(',');
        let roleIndex = 0;

        setInterval(() => {
            // Fade out upwards
            rotatingTextElement.classList.add('fade-out');
            
            setTimeout(() => {
                roleIndex = (roleIndex + 1) % roles.length;
                rotatingTextElement.textContent = roles[roleIndex];
                
                // Immediately jump to the bottom position (hidden)
                rotatingTextElement.classList.remove('fade-out');
                rotatingTextElement.classList.add('fade-in');
                
                // Wait for the DOM to update to fade-in state, then animate to normal
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        // Removing fade-in class triggers the transition to opacity: 1, translateY: 0
                        rotatingTextElement.classList.remove('fade-in');
                    });
                });
            }, 500); // Wait for the 0.5s CSS transition to finish
            
        }, 3000); // Role changes every 3 seconds
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
