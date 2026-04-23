// ============================================
// MARIA AMÉLIA - LANDING PAGE
// Interatividade e Efeitos
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect no background
    const parallaxBg = document.getElementById('parallaxBg');
    
    if (parallaxBg) {
        window.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            const moveX = (x - 0.5) * 20;
            const moveY = (y - 0.5) * 20;
            
            parallaxBg.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
        });
    }

    // Hover effect na imagem hero
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) saturate(1.1)';
        });
        
        heroImage.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) saturate(1)';
        });
    }

    // Form submission
    const messageForm = document.querySelector('.message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('.form-input').value;
            const message = this.querySelector('.form-textarea').value;
            
            if (message.trim()) {
                // Simular envio
                const button = this.querySelector('.form-button');
                const originalText = button.textContent;
                
                button.textContent = 'Mensagem enviada! ✓';
                button.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    this.reset();
                }, 2000);
            }
        });
    }

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Adicionar classe de animação aos elementos quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.hero-section, .social-section, .message-section, .footer').forEach(el => {
        observer.observe(el);
    });
});

// Efeito de scroll parallax
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxBg = document.getElementById('parallaxBg');
    
    if (parallaxBg) {
        parallaxBg.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});
