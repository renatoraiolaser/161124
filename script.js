document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById("cookiePopup");
    const acceptButton = document.getElementById("acceptCookies");

    // Verificar se os cookies já foram aceitos
    if (!localStorage.getItem("cookiesAccepted")) {
        cookiePopup.classList.add("show");
    }

    // Evento de aceitação dos cookies
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookiePopup.classList.remove("show");
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

