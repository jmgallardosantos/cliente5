
function cambiaColor(color){
    document.body.style.backgroundColor = color;
}

document.addEventListener('mousedown',() => cambiaColor('#FFFF00'));
document.addEventListener('mousemove',() =>cambiaColor("white"));
document.addEventListener('keydown',() =>cambiaColor("#CCE6FF"));

