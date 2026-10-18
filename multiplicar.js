function generarTablas() {
    let contenedor = document.getElementById("ContenedorTabla");
    let inputNumero = document.getElementById("txtTabla").value.trim();

    if (inputNumero === "") {
        alert("Por favor, ingresa un número para generar la tabla.");
        return;
    }

    let numero = Number(inputNumero);

    if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
        alert("Por favor, ingresa únicamente un número entero positivo (ej. 1, 2, 5, 12).");
        return;
    }

    let contenido = '<h1>✨ Tabla de Multiplicar del ' + numero + ' ✨</h1>';
    contenido += '<div class="tabla">';

    for (let i = 1; i <= 10; i++) {
        contenido += '<div class="fila">' + numero + ' × ' + i + ' = ' + (numero * i) + '</div>';
    }

    contenido += '</div>';

    contenedor.innerHTML = contenido;
}