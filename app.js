// Array global para almacenar los nombres de los amigos
let listaAmigosGlobal = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el campo de entrada
    let inputAmigo = document.getElementById("amigo");
    // Obtener y limpiar el valor ingresado (elimina espacios al inicio y final)
    let nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor ingresa un nombre válido");
        return;
    }

    // Agregar el nombre a la lista global
    listaAmigosGlobal.push(nombreAmigo);

    // Actualizar la lista visual en el HTML
    let listaHTML = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nombreAmigo;
    listaHTML.appendChild(li);

    // Limpiar el campo de entrada para nuevos registros
    inputAmigo.value = "";
}

// Función para sortear (seleccionar aleatoriamente) un amigo
function sortearAmigo() {
    // Verificar que exista al menos un nombre en la lista
    if (listaAmigosGlobal.length === 0) {
        alert("Agrega al menos un amigo antes de sortear");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * listaAmigosGlobal.length);
    let amigoSeleccionado = listaAmigosGlobal[indiceAleatorio];

    // Mostrar el resultado en el elemento con id "resultado"
    let resultadoHTML = document.getElementById("resultado");
    // Limpiar resultados previos (si los hay)
    resultadoHTML.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = amigoSeleccionado;
    resultadoHTML.appendChild(li);
}
