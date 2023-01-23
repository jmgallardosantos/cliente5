
        var boton=document.getElementById("boton");
            boton.addEventListener("click",funcion1)
            function funcion1(){
            var elementos= document.getElementsByName("asignatura");
                for(i=0;i<elementos.length;i++){
                    if(elementos[i].checked == php){
                        elementos.action == "prueba@iesdonana.org"
                    }
                }
            }

            document.getElementById("boton").addEventListener("click",funcion2);
        
            function funcion2(){
                var array = [];
            var elementos= document.getElementsByName("semana");
                for(i=0;i<elementos.length;i++){
                    array.push(elementos[i].checked)
                    
                    }
                    alert (array.value);
                }
            document.getElementById("boton").addEventListener("click",funcion3);
                
                function funcion3(){

                    body.style.backgroundColor = "red";
                }

