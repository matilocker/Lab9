//Función para redirigir a otra página
function initiate() {
    window.location.href = 'index.html';
}

//Botón de iniciar
const boton = document.getElementById('iniciar')

boton.addEventListener('click', initiate);