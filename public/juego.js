
let bola = document.querySelector(".bola");
let girarBtn = document.querySelector("#jugar");
let apuesta = document.querySelector("#apuest");
let opc = document.querySelector("#opc");

let contador=0,suma=0,sumaapuesta=0;
function updateStats(){

    document.querySelector("#cant-count").textContent = `jugadas: ${contador}`;
    document.querySelector("#dinero-count").textContent = `dinero: ${suma}`;
   
}

function disableButton(){
   girarBtn.disabled = true;
    setTimeout(function(){
       girarBtn.disabled = false;
    },3000);
}
girarBtn.addEventListener("click", () => {
   
    if(apuesta.value !='' && opc.value!=''){

       
        let i = Math.floor(Math.random() * 10);
        

    circulo.style.animation = "true";
    let numero=parseInt(opc.value)
    let ingreso=parseInt(apuesta.value)
    sumaapuesta+=ingreso;
   
 
            circulo.style.animation = "false";
            
               setTimeout(function(){
                if(i===numero){
                    suma=ingreso*10;
                    swal({text:` Que buena suerte!!, ganaste más dinero y en total es: ${suma}` , title: ` El ultimo digito de la pelota fue: ${i}`}); } 
                else{
                    suma=0;
                    swal({title:`El ultimo digito de la pelota fue: ${i}`,text:`te quedaste sin dinero`});
                  } 
                  window.location.reload(true);
                    }, 3000);
                    
        
 
        
      

                }
               

    else{
        
        swal({
            text: 'ingresa tu apuesta para parar la bola',
            icon:'warning'
          })
    }
    
});










 




 

   
        
    