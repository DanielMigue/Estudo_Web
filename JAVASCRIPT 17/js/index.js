/*EVENTO DE TEMPO COM JAVASCRIPT
Em 2015 foi introduzido no JavaScript.

As Classes são como fábricas para criar objetos
assim como as fábricas precisam de máquinas, no JavaScript precisa-se do método constructor().
*/

class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou:Biiiiiiiiiiiii";
    }
}

//Para criar os objetos, elas terão que ser feitas depois da criação da classe
const uno = new Carro("fiat", "uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013)
console.log(gol);
console.log(uno);
console.log(gol.buzina());

gol.ano = 2014;//alterei, aponta o objeto e seu respectivo valor para atualizar
console.log(gol)


