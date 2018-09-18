
 
 const botao = document.querySelector(".login__button")

botao.addEventListener("click", function(event){
    event.preventDefault()

    const resposta = document.createElement("span")

    const respostaMensagem = document.createTextNode("Email cadastro com sucesso")
    resposta.appendChild(respostaMensagem)

    const loginForm = document.querySelector(".login__form")
    loginForm.insertBefore(resposta, loginForm.childNodes[0])
 
})
