/*
 var -> Voce atribui um valor, mas ele pode ser alterado 
let ->  nao pode ser alterado, mas em outros blocos eles altera
const -> Não altera em lugar nenhum
 */

//DECLARAÇÃO DE VARIAVEIS
//var a,b,c;

//ATRIBUIÇÃO DOS VALORES
// var nome, sobrenome, nomeCompleto, idade;

// nome="Dimitri";
// sobrenome="Teixeira";
// idade= 30
// nomeCompleto = nome + " " + sobrenome;

// document.getElementById("texto").innerHTML = nomeCompleto



//  a=2;
//  b=3;
//  c=a+b 
 //com o var pode-se reatribuir valores como a=5
 
 //let torna a variavel única
//  let pessoa ="Dimitri";
//  let pessoa = "João";

// var x=10;//aqui é 10
// {
//     var x=2;//aqui é 2
// }
// //aqui também vai ser 2
// document.getElementById("texto").innerHTML = x;


// let y=10;//aqui é 10
// {
//     let y=2;//aqui é 2
// }
// para não ter repetição de variavel se usa let
// aqui também vai ser 10
// document.getElementById("texto").innerHTML = y;

// let y=10;//aqui é 10
// {
//     let y=2;//aqui é 2
//    nesse bloco o y = 2
//     document.getElementById("texto").innerHTML = y;
// }
// document.getElementById("texto").innerHTML = y;

const y=10;//aqui é 10
 {
     const y=2;// mas nao vai obedecer
    
     document.getElementById("texto").innerHTML = y;
 }
 //aqui tambem vai ser 10
 document.getElementById("texto").innerHTML = y;
