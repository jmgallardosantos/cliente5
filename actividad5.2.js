var caja = document.getElementById("caja");

var x = 0;
var y = 0;

document.addEventListener('keydown', k =>{
    if (k.code == 'ArrowUp' || k.code == 'Numpad8'){
        caja.style.top = (y -= 5) + "px";
    }
    else if (k.code == 'ArrowDown' || k.code == 'Numpad2'){
        caja.style.top = (y += 5) + "px";
    }
    else if (k.code == 'ArrowLeft' || k.code == 'Numpad4'){
        caja.style.left = (y -= 5) + "px";
    }
    else if (k.code == 'ArrowRight' || k.code == 'Numpad6'){
        caja.style.left = (y += 5) + "px";
    }
    
    });
