const botao = document.querySelector(".feedback__button")

botao.addEventListener("click", function(event){ 
    //desativa os eventos normais da função
    event.preventDefault()
   
        //Cria paragrafo
         const paragrafo = document.createElement("p")
        const colunaTexto = document.createElement("h1")
        const colunaTexto=document.createTextNode(document.getElementById("feedbackInputMessage").value) 

     //Aqui coloca coluna dentro da linha
     paragrafo.appendChild(colunaTexto)
  

})
