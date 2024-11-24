document.addEventListener('DOMContentLoaded', function () {
    // Controle do Popup
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptButton = document.getElementById('accept-cookies');

    if (cookiePopup && acceptButton) {
        acceptButton.addEventListener('click', function () {
            cookiePopup.classList.add('hidden'); // Esconde o popup
            setTimeout(() => {
                cookiePopup.remove(); // Remove o elemento do DOM
            }, 300); // Aguarda a transição
        });
    }

    // Controle do Slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(currentSlide); // Inicializa o primeiro slide
        setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
    }
});
