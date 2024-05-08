document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formularioVenta");
    const botonCopiar = document.getElementById("botonCopiar");
    const datosCopiados = document.getElementById("datosCopiados");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        // Construir el texto con los datos del formulario
        let textoDatos = "";
        const elementosFormulario = formulario.elements;
        for (let i = 0; i < elementosFormulario.length; i++) {
            if (elementosFormulario[i].type !== "submit") {
                textoDatos += elementosFormulario[i].labels[0].textContent + ": " + elementosFormulario[i].value + "\n";
            }
        }
        // Mostrar los datos en el textarea
        datosCopiados.value = textoDatos;
    });

    botonCopiar.addEventListener("click", function() {
        // Copiar los datos al portapapeles
        datosCopiados.select();
        document.execCommand("copy");
        // Mostrar un mensaje de confirmación
        alert("¡Los datos han sido copiados al portapapeles! No olvides enviar la foto de la cédula por ambos lados.");
    });
});
