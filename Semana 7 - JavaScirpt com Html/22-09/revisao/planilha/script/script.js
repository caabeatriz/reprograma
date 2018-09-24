const buttonFeedback = document.querySelector(".feedback__button");

buttonFeedback.addEventListener("click",function(event){
    event.preventDefault()
    alert("Comentário adicionado com sucesso")

    //Seleciona tabela
    const table = document.querySelector(".respostas__table")

   //Cria linha 
    const linha = document.createElement("tr")

   //Cria as três colunas que precisa
    const colunaEnterprise = document.createElement("td")
    const colunaCity = document.createElement("td")
    const colunaComents = document.createElement("td")

    //Pega input
    const colunaEnterpriseText = document.createTextNode(document.getElementById("feedbackInputName").value)
    const colunaCityText = document.createTextNode(document.getElementById("feedbackInputMoney").value)
    const colunaComentsText= document.createTextNode(document.getElementById("feedbackInputDate").value)

    //Guarda o valor dentro das colunas
    colunaEnterprise.appendChild(colunaEnterpriseText)
    colunaCity.appendChild(colunaCityText)
    colunaComents.appendChild(colunaComentsText)

    //Cria uma linha para cada coluna
    linha.appendChild(colunaEnterprise)
    linha.appendChild(colunaCity)
    linha.appendChild(colunaComents)

    //Coloca as linhas dentro da tabela
   
    table.appendChild(linha)
 

})