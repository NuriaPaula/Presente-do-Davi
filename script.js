let slideIndex = 0;
let slideTimeout;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    // Remove todas as classes anteriores e aplica hidden
    for (let i = 0; i < slides.length; i++) {
        slides[i].className = 'slide hidden';
    }
    
    // Calcula os índices das três imagens visíveis
    const prevIndex = (slideIndex - 1 + slides.length) % slides.length;
    const currentIndex = slideIndex;
    const nextIndex = (slideIndex + 1) % slides.length;
    
    // Aplica as classes para posicionar as imagens
    slides[prevIndex].className = 'slide prev-slide sliding-to-left';
    slides[currentIndex].className = 'slide current-slide sliding-center-from-right';
    slides[nextIndex].className = 'slide next-slide sliding-left';
    
    // Remove as classes de animação após a transição
    setTimeout(() => {
        slides[prevIndex].className = 'slide prev-slide';
        slides[currentIndex].className = 'slide current-slide';
        slides[nextIndex].className = 'slide next-slide';
    }, 600);
    
    // Reinicia o timeout
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides();
    }, 12000); // Muda o slide a cada 12 segundos
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Inicializa o carrossel
showSlides();