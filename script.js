document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptButton = document.getElementById('accept-cookies');

    // Verificar se o usuário já aceitou os cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookiePopup.classList.add('hidden');
    }

    // Ação ao clicar no botão de aceitação
    acceptButton.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true'); // Salva a aceitação no localStorage
        cookiePopup.classList.add('hidden'); // Esconde o popup
        setTimeout(() => {
            cookiePopup.remove(); // Remove completamente o elemento do DOM após a animação
        }, 300); // Tempo da transição definida no CSS (0.3s)
    });
});



// Slider de Tópicos
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}



// Inicializa o primeiro slide
showSlide(currentSlide);

// Troca de slide a cada 3 segundos
setInterval(nextSlide, 3000);

