const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");
const text = document.querySelector (".gallery__caption")
const trocaBorder = document.querySelector("body")

for(let i = 0; i < links.children.length; i++){
    const troca = links.children[i];
    troca.addEventListener("click", function(){
        const img = this.dataset.image;
        imagem.src = img;
        
        //Aqui ele define uma const, puxa do objeto da um data set que é do html junto com title 
        const texto = this.dataset.title     
         //aqui ele pega a propriedade text que foi definida la em cima e troca o texto de dentro
        text.textContent = texto
        
        // trocaBorder.addEventListener("change", function(troca1){
        //     troca1.preventDefault()
        //      if ( img.value == "img/foto2.jpg"){
        //          document.querySelector("body").style.backgroundColor="blue"
        //          return false
        //      }
        //  })
        //  console.log(trocaBorder)
       
        
        
    })
    


} 
