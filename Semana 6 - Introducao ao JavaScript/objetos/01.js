// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const choicePokemon = {
    name: "Clefairy",
    number: "035",
    grupo: "Fairy",
    origem: " Cleffa",
    picture: "https://cdn.bulbagarden.net/upload/f/f4/035Clefairy.png",
    name_japanese: "Pippi",
    
}


// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."


console.log("Hello, my name is" , choicePokemon.name,  ". And my name is Japanase is", choicePokemon.name_japanese )

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

choicePokemon.can_fly = false;

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".


choicePokemon.fly= function () {
     if(this.can_fly){
    
     return ("Flyingggggggg")
}

else{
    return ("No, i don't fly")
}}


// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".

choicePokemon.do_something = function(){
    
   let x = Math.floor (Math.random()  * 3 )
   if ( x === 0) {    
       return ("Bag") 
}

else if (x===1){
    return ("Run")
}
 else {
     return ("Fight")
 }

}

// ou 

choicePokemo.do_something = function (){
    let acoes = [""]
    return acoes [Math.floor(Math.random()* acoes.length)]
}
// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

choicePokemon.ask = function(){
return ("What will", choicePokemon.do_something()) 
}


// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.
for(const  prop in choicePokemon){
    console.log(prop )
}



key : value 

// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor


for (const prop in choicePokemon){
    console.log(`${prop}: ${choicePokemon[prop]}`)
}

// crie uma função construtora de um pokemon genérico

function Fabrica_de_Pokemon (){
    this.nome= nome
    this.nome_japones = nome_japones
    this.pode_voar= pode_voar
    this.diga_ola = function (){
        console.log(` Hello my name`)
    }

    this.voe = function (){
        if (this.pode_voar) 
        {
             name. 
        }
    }
}