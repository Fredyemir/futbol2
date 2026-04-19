function mostrarJugador() {
    const jugadores = [
        "Lionel Messi - Argentina",
        "Cristiano Ronaldo - Portugal",
        "Kylian Mbappé - Francia",
        "Erling Haaland - Noruega"
    ];

    const random = Math.floor(Math.random() * jugadores.length);
    document.getElementById("jugador").textContent = jugadores[random];
}

// Evento para hacer clic en imágenes
const imagenes = document.querySelectorAll(".galeria img");

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        alert("Has seleccionado una imagen de fútbol ⚽");
    });
});