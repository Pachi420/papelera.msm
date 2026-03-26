// Navbar Mobile Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(245, 247, 250, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Product Modal
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        const products = {
            'papel-bond': {
                image: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%233498db%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22160%22 font-family=%22Arial%22 font-size=%2230%22 fill=%22white%22 text-anchor=%22middle%22> Papel Bond 75g </text></svg>',
                title: 'Papel Bond 75g',
                desc: 'Paquete de 500 hojas de papel bond de 75gr, perfecto para impresiones de oficina diaria, copias y documentos generales. Alta blancura y opacidad.',
                price: '$4.99'
            },
            'papel-reciclado': {
                image: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%2327ae60%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22160%22 font-family=%22Arial%22 font-size=%2230%22 fill=%22white%22 text-anchor=%22middle%22> Papel Reciclado </text></svg>',
                title: 'Papel Reciclado 80g',
                desc: 'Papel 100% reciclado de 80gr, ideal para empresas comprometidas con el medio ambiente. Mantiene excelente calidad de impresión.',
                price: '$5.49'
            },
            'papel-couché': {
                image: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23f39c12%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22160%22 font-family=%22Arial%22 font-size=%2228%22 fill=%22white%22 text-anchor=%22middle%22> Papel Couché </text></svg>',
                title: 'Papel Couché Brillante',
                desc: 'Papel couché brillante de alta calidad para impresiones profesionales, catálogos, folletos y material publicitario.',
                price: '$7.99'
            },
            'papel-especial': {
                image: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%239b59b6%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22160%22 font-family=%22Arial%22 font-size=%2228%22 fill=%22white%22 text-anchor=%22middle%22> Papel Especial </text></svg>',
                title: 'Papeles Especiales',
                desc: 'Amplia variedad de papeles texturizados, colores, kraft y especiales para manualidades, artesanía y proyectos creativos.',
                price: '$8.99+'
            }
        };

        const product = products[modalId];
        if (product) {
            modalImage.src = product.image;
            modalTitle.textContent = product.title;
            modalDesc.textContent = product.desc;
            modalPrice.textContent = product.price;
            modal.style.display = 'block';
        }
    });
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initial hero animation already in CSS

console.log('Papelera XYZ Landing Page - JS cargado correctamente');

