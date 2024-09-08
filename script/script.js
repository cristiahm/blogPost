//A qui agragamos elboton 0 para mostrar contenido y ver menos contenido sobre el articulo desmitificando la Inteligencia Artificial: Un Viaje al Corazón de la Innovación Tecnológica
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

//A qui agragamos elboton 1 para mostrar contenido y ver menos contenido sobre el articulo Alcanzando la Grandeza: Descubriendo la Magia detrás de la Pasión por los Deportes
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

//A qui agragamos elboton 2 para mostrar contenido y ver menos contenido sobre el contenido La Revolución de la Inteligencia Artificial
function mostrarContenidoCompleto2()
{
    document.getElementById("contenido_resumido2").style.display = "none";
    document.getElementById("contenido_completo2").style.display = "block";
}

function mostrarContenidoResumido2()
{
    document.getElementById("contenido_resumido2").style.display = "block";
    document.getElementById("contenido_completo2").style.display = "none";
}

// Agregar interactividad al botón de "Me gusta" sobre el articulo Alcanzando la Grandeza: Descubriendo la Magia detrás de la Pasión por los Deportes
const likeButton1 = document.getElementById('like-button1');
let likes1 = 0;

likeButton1.addEventListener('click', () => {
    likes1++;
    likeButton1.textContent = `Me gusta (${likes1})`;
}); 


// Agregar interactividad al botón de "Me gusta" sobre el articulo La Revolución de la Inteligencia Artificial
const likeButton2 = document.getElementById('like-button2');
let likes2 = 0;

likeButton2.addEventListener('click', () => {
    likes2++;
    likeButton2.textContent = `Me gusta (${likes2})`;
}); 