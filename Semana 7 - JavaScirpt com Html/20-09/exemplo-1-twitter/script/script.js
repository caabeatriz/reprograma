const btnTweetar = document.querySelector(".tweet-composer__button")
const inputTweet = document.getElementById("tweetComposerInput")
const contador = document.getElementById("tweetComposerCounter")

btnTweetar.addEventListener("click", function (btntweetar1) {
    btntweetar1.preventDefault();
   
    //PARA NAO DEIXAR TWEETAR EM BRANCO
    if (inputTweet.value === null || inputTweet.value === undefined || inputTweet.value === "") {
        return false
    }

  
    //Divizona que abraça todos
    const div = document.createElement("div")
    div.className = "tweets-timeline__box"

    //Header onde pega o user name e name
    const header = document.createElement("div")
    header.className = "tweets-timeline__header"
    header.innerHTML = ""

    const name = document.createElement("span")
    name.className = "tweets-timeline__name"
    name.innerHTML = "Carolesss"

    const username = document.createElement("span")
    username.className = "tweets-timeline__username"
    username.innerHTML = " @diabareta"

    //Mostra data com numero e mes cortado
    const date = new Date()
    const month = date.toLocaleString(`pt-br`, { month: `short` })
    const day = date.getDate()
    const dateHtml = document.createElement("span")
    dateHtml.innerHTML = ` ${day} de ${month}`
    dateHtml.className = "tweets-timeline__username"

    //Guarda a variavel name e username no header
    header.appendChild(name)
    header.appendChild(username)
    header.appendChild(dateHtml)

    // Foooter que fica embaixo como botao para exclusao 
    const footer = document.createElement("div")
    footer.innerHTML = `<button class="tweets-timeline__delete-button" > Excluir </button>`
    footer.className = "tweets-timeline__delete-button"

    //Botao excluir o tweet
    footer.addEventListener("click", function (event1) {
        event1.preventDefault()
        div.remove()
    })
    //Cria o p onde vai o text o digitado 
    const createTweet = document.createElement("p")
    createTweet.innerHTML = inputTweet.value

    //Pega as const header,createtweet e footer e joga na div 
    div.appendChild(header)
    div.appendChild(createTweet)
    div.appendChild(footer)

    //Ele puxa o tweet de cima e joga para baixo do time-line box
    const tweets = document.querySelector(".tweets-timeline")
    tweets.insertBefore(div, tweets.childNodes[0])
    inputTweet.value = ""
    contador.innerHTML = 280
    
})
    //Faz a contagem do contador para ir diminuindo
    inputTweet.addEventListener("keyup", function () {
    const textBox = this
    const maxLength = 280
    

    //Ele desabilita os caracteres caso exceda 280 
    contador.innerHTML = maxLength - textBox.value.length

    //Ao sair do if ele habilita botao e cor novamente
    btnTweetar.disabled = false
    contador.style.color = ""
   

    //Caso o texto box for maior que o maxlength ele desabilita o botao e muda a cor do contador
    if (textBox.value.length > maxLength) {
        btnTweetar.disabled = true
        contador.style.color = "red"
    }
})