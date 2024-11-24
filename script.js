document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptButton = document.getElementById('accept-cookies');

    // Ação ao clicar no botão de aceitação
    acceptButton.addEventListener('click', function () {
        cookiePopup.classList.add('hidden'); // Esconde o popup
        setTimeout(() => {
            cookiePopup.remove(); // Remove o elemento do DOM após a animação
        }, 300); // Tempo da transição (300ms)
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

