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