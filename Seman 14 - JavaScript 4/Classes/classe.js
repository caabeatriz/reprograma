
// função constutora
function Formas_geometricas (altura, largura, cor, unidade){

     this.altura = altura;
     this.largura = largura;
     this.cor=cor;
     this.unidade = unidade;
      this.area = function(){
         return this.altura * this.largura + this.unidade    
    
      }}

    //   classe para criar elemento

    class Formas_geometricas1 {
        constructor (altura,largura,cor,medida){
            this.altura = altura 
            this.largura = largura
            
            this.cor = cor
            this.medida = medida 

        }

        calcular_area (){
           return  this.altura * this.largura + this.medida
        }

        center (){
            return [this.altura /2, this.largura / 2]
        }
    }

    class Quadrado extends Formas_geometricas1 {
        constructor (lado,cor,unidade)

        // auper = esta puxando o superior
        //  primero lado = simboliza altura do construtor la em cima 
        //  segundo lado = simboliza a largura do construtor la em cima 
        super(lado,lado,cor,unidade)
    }
