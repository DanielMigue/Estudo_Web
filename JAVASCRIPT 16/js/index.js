/*EVENTO DE TMEPO COM JAVASCRIPT

São muito utilizados!

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempos são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, milliseconds)
-> É o meesmo que setTimeout(), mas repete a execução da função continuamente.
*/

//**************setTimeout***************
//function ativarContagem(){//Ao clicar no botão ele mostra a text e depois do tempo mostra o outro text
//     document.getElementById('tempo').innerHTML = "Começou a contar!";
//     EXECUTA APENAS APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
//      tempo = setTimeout(function(){
//         document.getElementById('tempo').innerHTML = "Executou o setTimeout";
//      },5000);// 5mil milissegundos que é 5 segundos
// }

// function pararContagem(){
//     //COMANDO PARA PARAR A FUNÇÃO
//     clearTimeout(tempo)
//     document.getElementById('tempo').innerHTML = "Parou a contagem";
// }

//__________________________________________________________________
//***************setInterval*************

function ativarContagem(){
    document.getElementById('tempo').innerHTML;
    tempo = setInterval(function(){
        //A cade 1 segunda ele execua a função
        var cronometro = document.getElementById('tempo').innerHTML;//pega o valor que se tem no cronometro
        var soma = parseInt(cronometro) + 1;//adiciona mais um
        document.getElementById('tempo').innerHTML = soma;//mostra o valor
    }, 1000);
    
}

function pararContagem(){
    //COMANDO PARA PARAR A FUNÇÃO
    clearInterval(tempo);
}