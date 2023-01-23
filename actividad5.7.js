
document.getElementById("miimagen").addEventListener("error", e => {
    if (e.onabort){
        alert ("El usuario ha detenido la carga")
    }
    else if (e.error){
        alert ("Error del archivo")
    }
    else {
        alert ("No hay ningun problema")
    }
});

