

const cadastroInputName = document.getElementById("cadastroInputNome")
const cadastroInputEmail = document.getElementById("cadastroInputEmail")
const cadastroInputEmailConfirm = document.getElementById("cadastroInputEmailConfirm")
const cadastroInputPassword = document.getElementById("cadastroInputPassword")
const cadastroInputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm")
const cadastroInputPhone= document.getElementById("cadastroInputPhone")
const cadastroInputArea = document.getElementById("cadastroInputArea")
const cadastroInputLevel = document.getElementById("cadastroInputLevel")
const buttonCadastro = document.querySelector(".cadastro__button")

buttonCadastro.addEventListener("click", function(eventButton){
    eventButton.preventDefault()
   
    // const optionSelect = inputArea.optionSelect
    // [inputArea.selectedIndex]

    // let radioItem
    // for(let i = 0; i< inputLevel.length; i++){
    //     if(inputLevel[i].checked){
    //         console.log(inputLevel[i])
    //         radioItem = inputLevel [i]
    //     }
        
    // }

    //Aqui ele pega os valores la em cima e joga para a variavel lista
    list = [ cadastroInputName, cadastroInputEmail, cadastroInputEmailConfirm,
        cadastroInputPassword, cadastroInputPasswordConfirm, cadastroInputPhone ]
    
        //Cria-se o for para fazer todos 
        for(const item in list ) {
            if ( list[item].value === undefined || list[item].value === null || list[item].value === "" || list[item].value ===" "){
                list[item].focus()
                return false
            }
        }
        if (cadastroInputEmail.value !== cadastroInputEmailConfirm.value  ){
        
        alert ("emails nao conferem")
        cadastroInputEmail.focus()
        
        return false
        } else if (cadastroInputPassword.value.length <=2){
            alert ("Senha deve ser maior que sete digitos")
            cadastroInputPassword.focus()
            return false
        }
        
        else if (cadastroInputPassword.value !== cadastroInputPasswordConfirm.value){
            alert ("senhas nao conferem")
        cadastroInputPassword.focus()
        return false
        
        } 
    

        alert("Cdastro realizado")
     
 this.closest("form").submit()

      

     
})

cadastroInputArea.addEventListener("change",function(changebg){
    changebg.preventDefault()

    if (cadastroInputArea.value == "Front-End" ) {
        document.querySelector(".wrapper").style.backgroundColor="blue"
    } else if (cadastroInputArea.value == "Back-End"){
        document.querySelector(".wrapper").style.backgroundColor="green"
    } else if (cadastroInputArea.value =="UX Designer"){
        document.querySelector(".wrapper").style.backgroundColor="pink"
    }else if (cadastroInputArea.value == "UI Designer"){
        document.querySelector(".wrapper").style.backgroundColor="orange"}
     
})

            //Some tudo do forms
        // this.closest("form").submit()

// let x = ""
// if (cadastroInputEmail.value !== cadastroInputEmailConfirm.value  ){
// x="xuxaaaaaa"
//     document.getElementById("demo").innerHTML=x;
// }