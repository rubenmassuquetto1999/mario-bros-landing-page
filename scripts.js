const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");
const secHome = document.getElementById("sec-home");
const secServicos = document.getElementById("sec-servicos");

function mostrarForm() {
    form.classList.add("ativo");
    mascara.classList.add("ativo");
}

function ocultarForm() {
    form.classList.remove("ativo");
    mascara.classList.remove("ativo");
}

function mostrarHome() {
    secHome.style.display = "flex";
    secServicos.style.display = "none";
}

function mostrarServicos() {
    secHome.style.display = "none";
    secServicos.style.display = "flex";
}