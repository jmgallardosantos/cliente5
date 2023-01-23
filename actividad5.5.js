

var img = document.getElementById("Fondo");

img.addEventListener('mousedown', () =>{
        img.setAttribute("src", "img/ordenador_nuevo.jpg");
});

img.addEventListener('mouseup', () =>{
    img.setAttribute("src", "img/ordenador_viejo.jpg");
});




