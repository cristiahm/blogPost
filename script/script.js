//A qui agragamos elboton 0 para mostrar contenido y ver menos contenido
function mostrarContenidoCompleto()
{
    document.getElementById("contenido_resumido").style.display = "none";
    document.getElementById("contenido_completo").style.display = "block";
}

function mostrarContenidoResumido()
{
    document.getElementById("contenido_resumido").style.display = "block";
    document.getElementById("contenido_completo").style.display = "none";
}

//A qui agragamos elboton 1 para mostrar contenido y ver menos contenido
function mostrarContenidoCompleto1()
{
    document.getElementById("contenido_resumido1").style.display = "none";
    document.getElementById("contenido_completo1").style.display = "block";
}

function mostrarContenidoResumido1()
{
    document.getElementById("contenido_resumido1").style.display = "block";
    document.getElementById("contenido_completo1").style.display = "none";
}

// Agregar interactividad al botón de "Me gusta"
const likeButton = document.getElementById('like-button');
let likes = 0;

likeButton.addEventListener('click', () => {
    likes++;
    likeButton.textContent = `Me gusta (${likes})`;
}); 
