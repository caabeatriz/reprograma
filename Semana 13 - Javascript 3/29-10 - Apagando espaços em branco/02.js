// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"

function formatRG(unformatted) {
    var rg = "504500429";

    // / / - abriu para colocar as variaveis
    // ( ) - abriu para colocar as variasveis
    // \d - d minusculo serve para digitos - de 0 a 9 
    // \d{2} \d{3} - grupo que define quantos caracteres quer pegar 
    // $1. - pega o primeiro elemento do grupo anterior e coloca ponto depois 

    var resultado = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
    console.log(resultado)
}

let result = unformatted.replace(/\D/g,"") 
// LIMPAR  TUDO QUE TIVER ESPAÇO EM BRANCO



// /\w+@\w+\.com/ - w+ = todo caracter mais @ mais todo caracter mais .com
// recebe o numero
// separa em array 
// organiza de acordo que estiver unformatted