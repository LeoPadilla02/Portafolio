//Menu hamburguesa
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const toggle = document.getElementById('menuToggle');

    nav.classList.toggle('show');

    if (nav.classList.contains('show')) {
        toggle.textContent = '✖'; //  cuando el menú está abierto
    } else {
        toggle.textContent = '☰'; // hamburguesa cuando está cerrado
    }
}
//Fin Menu hamburguesa**

//Color del opcion seleccionada del menu
const menuLinks = document.querySelectorAll('.nav-links .opciones-menu');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Quitar la clase 'active' de todos
        menuLinks.forEach(l => l.classList.remove('active'));

        // Agregarla solo al que se clickeó
        link.classList.add('active');
    });
});
//Fin Color del opcion seleccionada del menu**


//Efecto parallx banner 
window.addEventListener('load', function () {
    const letras = document.querySelector('.contenido-letras');
    const imagen = document.querySelector('.dospartes-banner img');

    letras.classList.add('active');
    imagen.classList.add('active');
});
//Efecto parallx banner**
