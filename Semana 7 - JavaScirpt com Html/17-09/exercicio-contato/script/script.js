const inputName = document.getElementById("contatoInputNome")
const inputEmail = document.getElementById("contatoInputEmail")
const inputPhone = document.getElementById("contatoInputPhone")
const inputMessage = document.getElementById("contatoInputMessage")
const inputButton = document.querySelector(".contato__button")

inputButton.addEventListener("click",function(event){
    event.preventDefault()

   //Verificar se esta indefinido, nulo, vazio e espaço em branco
    if (inputName.value === undefined || inputName.value === null || inputName.value === "" || inputName.value === " " ){
     //O botao fica em focus
    inputName.focus()
    return false
    }
        else if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
            inputEmail.focus()
            return false 
        }
      
        else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " "){
            inputPhone.focus()
            return false 
        }
        
        else if (inputMessage.value === undefined || inputMessage.value === null || inputMessage.value === "" || inputMessage.value === " "){
            inputMessage.focus()
            return false 
        }
        

    
    })

// inputButton.addEventListener ("click", function(evento1){
//  console.log(evento1)
//     let x
// var r=confirm("Deseja mesmo envia ?")

// if (r==true)
//   {
//   x="você pressionou OK!";
//   }
// else
//   {
//   x="Você pressionou Cancelar!";
//   }

//   document.getElementById("demo").innerHTML=x;
