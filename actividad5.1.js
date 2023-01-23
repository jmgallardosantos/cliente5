document.addEventListener("mousedown",pulsa);

        function pulsa(e){

            if (e.button == 0){
                alert ("Acabas de pulsar el boton izquierdo")
            }
            if (e.button == 1){
                alert ("Acabas de pulsar el boton central")
            }
            if (e.button == 2){
                alert ("Acabas de pulsar el boton derecho")
            }
        }