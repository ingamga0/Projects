// Configura aquí la fecha exacta de su aniversario (Año, Mes [0-11], Día, Hora)
// Nota: Enero es 0, Febrero es 1, Marzo es 2... de ahí en adelante.
const fechaInicio = new Date(2026, 3, 4, 20, 0, 0); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    // Cálculos matemáticos para convertir milisegundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Inyectar el texto en el HTML
    document.getElementById("countdown").innerHTML = `
        <div class="time-box"><span>${dias}</span> días</div>
        <div class="time-box"><span>${horas}</span> horas</div>
        <div class="time-box"><span>${minutos}</span> minutos</div>
        <div class="time-box"><span>${segundos}</span> segundos</div>
    `;
}
// Objeto global para mantener el estado del índice de cada carrusel por separado
const indicesCarrusel = {};

function moverCarrusel(trackId, direccion) {
    const track = document.getElementById(trackId);
    const imagenes = track.querySelectorAll('img');
    const totalImagenes = imagenes.length;

    // Inicializar el índice si es la primera vez que se interactúa con este carrusel
    if (indicesCarrusel[trackId] === undefined) {
        indicesCarrusel[trackId] = 0;
    }

    // Actualizar el índice lógico
    indicesCarrusel[trackId] += direccion;

    // Controlar comportamiento infinito / cíclico
    if (indicesCarrusel[trackId] >= totalImagenes) {
        indicesCarrusel[trackId] = 0; // Vuelve al inicio
    } else if (indicesCarrusel[trackId] < 0) {
        indicesCarrusel[trackId] = totalImagenes - 1; // Va al final
    }

    // Calcular el porcentaje exacto de desplazamiento en X
    const desplazamiento = indicesCarrusel[trackId] * -100;
    track.style.transform = `translateX(${desplazamiento}%)`;
}
// Ejecutar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();
