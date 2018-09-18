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
    
    if(cadastroInputName.value === undefined || cadastroInputName.value === null || cadastroInputName.value === "" || cadastroInputName.value === " "){
        cadastroInputName.focus()
        return false
        
    }

    else if (cadastroInputEmail.value === undefined || cadastroInputEmail.value === null || cadastroInputEmail.value === "" || cadastroInputEmail.value === " "){
        cadastroInputEmail.focus()
        return  false
    }

    else if (cadastroInputEmailConfirm.value === undefined || cadastroInputEmailConfirm.value === null || cadastroInputEmailConfirm.value === "" || cadastroInputEmailConfirm.value === " "){
    cadastroInputEmailConfirm.focus()
        return false
    }

    else if (cadastroInputPassword.value === undefined || cadastroInputPassword.value === null || cadastroInputPassword.value === "" || cadastroInputPassword.value === " "){
        cadastroInputPassword.focus()
        return false
    }
    
    else if (cadastroInputPasswordConfirm.value === undefined || cadastroInputPasswordConfirm.value === null || cadastroInputPasswordConfirm.value === "" || cadastroInputPasswordConfirm.value === " "){
        cadastroInputPasswordConfirm.focus()
        return false
    }

    else if (cadastroInputPhone.value === undefined || cadastroInputPhone.value === null || cadastroInputPhone.value === "" || cadastroInputPhone.value === " "){
        cadastroInputPhone.focus()
        return false
    }
   
    
})



