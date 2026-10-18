function generarTablas() {
    let contenedor = document.getElementById("tabla");
    let numero = document.getElementById("txtTabla").value;

    // Validación si el campo está vacío
    if (numero === "") {
        alert("Por favor, ingresa un número para generar la tabla.");
        return;
    }

    let contenido = '<h1>✨ Tabla de Multiplicar del ' + numero + ' ✨</h1>';
    contenido = contenido + '<div class="tabla">';

    for (let i = 1; i <= 10; i++) {
        contenido = contenido + '<div class="fila">' + numero + ' × ' + i + ' = ' + (numero * i) + '</div>';
    }

    contenido = contenido + '</div>';

    contenedor.innerHTML = contenido;
}