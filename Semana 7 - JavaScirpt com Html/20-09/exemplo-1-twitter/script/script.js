const btnTweetar = document.querySelector(".tweet-composer__button");
const inputTweet = document.getElementById("tweetComposerInput")

btnTweetar.addEventListener("click", function(btntweetar1){
    btntweetar1.preventDefault();
    

    //Divizona que abraça todos
    const div = document.createElement ("div")
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



    //Guarda a variavel name e username no header
    header.appendChild(name)
    header.appendChild(username)
   
    // Foooter que fica embaixo como botao para exclusao 
    const footer = document.createElement("div")
    footer.innerHTML =`<button class="tweets-timeline__delete-button" > Excluir </button>` 
    footer.className = "tweets-timeline__delete-button"

    footer.addEventListener("click", function (event1){
        event1.preventDefault()
        div.remove()
    })

  


    //Cria o p onde vai o text o digitado 
    const createTweet = document.createElement("p")
    createTweet.innerHTML= inputTweet.value


    
    //Pega as const header,createtweet e footer e joga na div 
    div.appendChild(header)
    div.appendChild(createTweet)
    div.appendChild(footer)
  

    //Ele puxa o tweet de cima e joga para baixo do time-line box
    const tweets = document.querySelector(".tweets-timeline")
    tweets.insertBefore(div, tweets.childNodes[0])
    inputTweet.value= ""
    
})
let tweetComposerCounter = document.getElementById("tweetComposerCounter")

inputTweet.addEventListener("change", function(){
   
    if(this < 280){
      inputTweet -- 
       }
   })
    

