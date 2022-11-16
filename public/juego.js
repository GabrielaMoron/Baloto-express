
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
    let lado=parseInt(opc.value)
    let ingreso=parseInt(apuesta.value)
    sumaapuesta+=ingreso;
   
        if(i){
            circulo.style.animation = "false";
               setTimeout(function(){
        
               if(i===lado){
                   suma=ingreso*2;
                   swal(` Que buena suerte!!, ganaste más dinero y en total es: ${suma},los ultimos digitos de la pelota fueron: ${i}`); } 
               else{
                   suma=ingreso-ingreso;
                   swal(`¡Oh noo!, perdiste dinero en total tienes: ${suma},los ultimos digitos de la pelota fueron: ${i}`); }
                   }, 3000);
                   contador++;
        }
        else{
           setTimeout(function(){
               if(i===lado){
                   suma=ingreso*2;
                   swal(`Que buena suerte!!, ganaste más dinero y en total es: ${suma},los ultimos digitos de la pelota fueron: ${i}`); } 
               else{
                   suma=ingreso-ingreso;
                   swal(`¡Oh noo!, perdiste todo tu dinero en total tienes: ${suma},los ultimos digitos de la pelota fueron: ${i}`);}
           }, 3000);
           contador++;
        }
        
        setTimeout(updateStats, 3000);
        disableButton();
      


 
}
    else{
        
        swal({
            text: 'ingresa tu apuesta para parar la bola',
            icon:'warning'
          })
    }
    
});









 




 

   
        
    