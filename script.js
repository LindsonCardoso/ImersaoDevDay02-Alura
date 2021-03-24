
const eren = "eren";
const levi = "levi";

var guardaPersonagem;
const botao = document.querySelector("button"); 

const section = document.querySelector("section");

const h3 = document.querySelector("h3");
const h2 = document.querySelector("h2");
const h4 = document.querySelector("h4");

document.getElementById("btnSubmit").onclick = function(){
    var chute = document.getElementsByName("pers");
    for(var i=0; i<chute.length; i++){
        if(chute[i].checked){
            console.log("Escolheu: " + chute[i].value);
            guardaPersonagem =  chute[i].value;
            
            section.classList.add("active")
            if(guardaPersonagem == eren){
                h3.textContent = "Você acertou!!!";
                h4.textContent = "sasageyo sasageyou"
                h3.classList.remove("error"); 
            }
            else{
                h3.classList.add("error");
                h4.textContent = "Deu ruim"
                h3.textContent = "Você errou!!!";
            }
          
        }
    }
}


function verificarPerson(){
  
}

function fechaModal() {
    section.classList.remove("active");
  }

  function clicaForaFechaModal(event) {
    console.log(event.target);
  
    if (event.target.tagName == "SECTION") {
      section.classList.remove("active");
    }
  }


  section.querySelector("button").onclick = fechaModal;
  section.onclick = clicaForaFechaModal;
  