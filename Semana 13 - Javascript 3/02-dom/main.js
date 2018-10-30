// aqui.

// Primeiro puxar o elemento do html, o input 
// validar o botao
//Inserir algo no input


const input = document.getElementById("cpf");



// function formatRG(unformatted) {
//     var rg = "504500429";
//     var resultado = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
//     console.log(resultado)
// }



// ao focar ele aparece aquele valor

input.addEventListener("focus", function(event) {
    event.preventDefault()
    this.value = "___.___.___-__"
    const that = this
    setTimeout(function() {
        that.setSelectionRange(0,0)
    }, 10)
})

// ao desfocar ele deixa em branco
// input.addEventListener("blur" , function(){
//     input.value=""
// })

input.addEventListener("keypress", function (event){
    event.preventDefault()
   
   
   
    if("0123456789".indexOf(event.key) !== -1 
    &&  this.value.indexOf("_") !== -1){
        this.value=this.value.replace(/_/, event.key)
       
       
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index)
    }
   
        if (event.keyCode == 8){
            
            this.value=this.value.replace(/\d/, "_")
         
           
          

            // this.value=this.value.replace(/\d/,event_key)
            // const next_index1 = this.value.indexOf("_")
            // this.setSelectionRange(next_index1, next_index1)
        
        
        // alert("pt")


    }


})
    

// blur = é um evento de saída de focus

// input=input.replace(/\D/g,"")

