// hello("what") -> 
// Apareceria a mensagem "Hello, world"
// Porque ele nao definiu what como argumento

// hello() ->
// Apareceria mensagem "Hello, World"
function hello() {
	return "Hello, world!"
}

// show(4) ->  
//1º resultado= 16 
// Ele ja sai da função por ter o return

// show(-4) -> 
//1º resultado= 16 
// Ele ja sai da função por ter o return
function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}

// eq3() ->
//Como não tem variável para comparar, ele da undefinied, e ( undefinied, undefinied, undefinied)

// eq3(1, 2, 3) ->
// Ele compara 1 é igual a 2 e 1 igual a 3
// Como nao é verdadeiro, ele desce para linha debaixo
// E retorna o valor de 0 


// eq3("1", 1, 3) ->
// Ele compara a string "1" é igual a 1 e string "1" é igual a 3
//Como nao é verdadeiro porque usou a string 1 e o depois numero
//Ele desce para linha debaixo e retorna valor 0 

// eq3("!", "a", "b") ->
//Ele compara strings são iguais e como nao são ele desce para linha debaixo
//E retorna o valor 0

// eq3("!", "!", !) ->
// Sintaxe incorreta porque ! é um operacional 

function eq3(a, b, c) {
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}

// Resultado:  

// 

function sum(x) {
	return x + 2
}
const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)

// console.log(`${sum(5 + 2)}, ${sum(sum(x + 2))}`)
//console.log(`${sum(7)}, ${sum(sum(x + 2))}`)
//console.log(`${sum(7)}, ${sum(sum(x + 2))}`)
// function sum(7) {
// return 7 + 2
//  }
//console.log(`${(9)}, ${sum(sum(x + 2))}`)
// depois repete a mesma coisa no segundo
//console.log(`${(9)}, ${(11))}`)

// Resultado:
function confusion(x, y) {
	x = 2 * x + y
	return x

}


let x = 2
let y = 5
y = confusion(x,y)
y= confusion ( x,y)
{
	2 = 2* 2 + 5
	return 9
}



x = confusion(y, x)
console.log(`${x}, ${y}`)