/* Os arrays JavaScript são usados para armazenar vários valores em uma única variável
    Um array pode armazinar qualquer tipo de coisa dentro de seu indice

    Array=Matriz

    Leitura Complementar: https://bit.ly/3pFZtX3
*/


//FORMA DE SE CRIAR ARRAY

//1º
                   //0      //1       //2         //3
// const lista = ["arroz", "feijão", "macarrão", "leite"];

// alert(lista[0]);//Ele trás o arroz

//2º
// const lista= [];
// lista[0]="arroz";
// lista[1]="feijão";
// lista[2]="macarrão";
// lista[3]="leite";

//3º
// const lista = new Array("arroz", "feijão", "macarrão", "leite")

// const lista = ["arroz", "feijão", "macarrão", "leite"];
// let x = lista[3];
// alert(x)
//_______________________________________________________________
// lista[0]="café"
// alert(lista[0])//subistituiu pelo café

// console.log(lista);//mostra todos os itens
//________________________________________________

// const pessoa = ["Dimitri", "Teixeira", 30];//Array
// const Pessoa = {nome:"Dimitri",sobrenome:"Teixeira",idade:30};//Objeto

// pessoa[0]//Array(matriz). Usa-se matrizes para trabalhar com dados mais elaborados
// pessoa.nome;//objeto - Coisas mais simples como um item especifico com várias propriedades dentro dele

//____________________________________________________
const pessoa = ["Dimitri", "Teixeira", 30];//Array

// alert(pessoa.length); // retorna o tamanho da array que contem 3 itens

//RETORNA O ÚLTIMO INDICE
// alert(pessoa[pessoa.length - 1]);//Retira o índice 0, retornando sempre o último item do array

//ADICIONA UM ITEM
//1º
// pessoa.push("Brasileiro")
//2º
// pessoa[pessoa.length] = "Casado";

//COMO SABER SE É UMA MATRIZ
alert(Array.isArray(pessoa));//Ele retorna true se for verdade









