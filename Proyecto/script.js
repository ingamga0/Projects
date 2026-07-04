// Configura aquí la fecha exacta de su aniversario (Año, Mes [0-11], Día, Hora)
// Nota: Enero es 0, Febrero es 1, Marzo es 2... de ahí en adelante.
const fechaInicio = new Date(2026, 4, 4, 20, 0, 0); 

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

// Ejecutar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();