// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"

function formatRG(unformatted) {
    var rg = "504500429";
    var resultado = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
    console.log(resultado)
}

let result = unformatted.replace(/\D/g,"") 
// LIMPAR  TUDO QUE TIVER ESPAÇO EM BRANCO


// recebe o numero
// separa em array 
// organiza de acordo que estiver unformatted