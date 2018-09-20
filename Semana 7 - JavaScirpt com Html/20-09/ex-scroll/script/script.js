const button = document.getElementById("arrowTop")

button.addEventListener("click",function(){
    console.log("clicou")    
    window.scrollTo(pageYOffset, 0)

})

//Aqui ele pega rolagem da tela e mostra o comsole
window.addEventListener("scroll",function(){
    if(this.pageYOffset > 450){
     button.hidden = false
     return false
    }
})
