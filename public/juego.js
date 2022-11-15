let moneda = document.querySelector(".moneda");
let girarBtn = document.querySelector("#jugar");
let apuesta = document.querySelector("#apuest");
let opc = document.querySelector("#opc");

let cara = 0,sello = 0,contador=0,suma=0,sumaapuesta=0;

function updateStats(){


    document.querySelector("#cara-count").textContent = `cara: ${cara}`;
    document.querySelector("#sello-count").textContent = `sello: ${sello}`;
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

       
        let i = Math.floor(Math.random() * 50);
        contador++;

    moneda.style.animation = "none";
    let lado=parseInt(opc.value)
    let ingreso=parseInt(apuesta.value)
    sumaapuesta+=ingreso;
   
            moneda.style.animation = "spin-cara 2s forwards";
               setTimeout(function(){
        
               if(i===lado){
                   suma=ingreso*2;
                   swal(` Que buena suerte!!, ganaste más dinero y en total es: ${suma},el resultado es: ${i}`); } 
               else{
                   suma=ingreso-ingreso;
                   swal(`¡Oh noo!, perdiste dinero en total tienes: ${suma}, el resultado es: ${i}`); }
                   }, 3000);
                   cara++;
        
  
        
        setTimeout(updateStats, 3000);
        disableButton();
      


 
}
    else{
        
        swal({
            text: 'ingresa tu apuesta y una opción para lanzar la moneda',
            showClass: {
              popup: 'animated bounceInDown'
            },
            hideClass: {
              popup: 'animated  bounceInDown'
            }
          })
    }
    
});









 

   
        
    