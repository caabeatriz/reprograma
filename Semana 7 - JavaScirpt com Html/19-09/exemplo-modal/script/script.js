const loginButton = document.querySelector(".login__button")
const loginModal = document.querySelector (".login-modal")


loginButton.addEventListener("click", function(login){
    login.preventDefault()

    document.querySelector(".login-modal").style.display="flex"
})

loginModal.addEventListener("click", function(){
    document.querySelector(".login-modal").style.display="none"
} )

