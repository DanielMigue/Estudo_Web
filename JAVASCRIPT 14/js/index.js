/*
É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não será executada e o valor padrão será acionado.

tem que ser o mesmo tipo e tem que ser examente como está no caso, tomar cuidado com caseSensitive
 */

function verificaCor(){
    let cor = document.getElementById("cor").value 
    cor = cor.toLowerCase();//converte para minusculo

    switch (cor){
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: " + cor;
        }
    }