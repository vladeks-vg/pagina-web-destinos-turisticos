
fetch("header.html")
    .then(respuesta => respuesta.text())
    .then(datos => {
        document.getElementById("headerid").innerHTML = datos;
    })
    .catch(error => {
        console.error("No se pudo cargar el encabezado:", error);
    });

fetch("footer.html")
    .then(respuesta => respuesta.text())
    .then(datos => {
        document.getElementById("footerid").innerHTML = datos;
    })
    .catch(error => {
        console.error("No se pudo cargar el pie de página:", error);
    });
