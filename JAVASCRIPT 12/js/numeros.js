const numeros= [40,100,1,5,25,10];

numeros.sort(function(a,b){
    return a-b
});//deixa os números na ordem correta

//numeros.sort(function(a,b){
    //return b-a
//});//De trás pra frente

//document.getElementById("teste").innerHTML = numeros;

//FUNÇÃO PARA PEGAR O MAIOR NÚMERO
function MaiorNumero(array){
    return Math.max.apply(null,array);
}

//document.getElementById("teste").innerHTML = MaiorNumero(numeros);

//FUNÇÃO PARA PEGARO MENOR NÚMERO
function MenorNumero(array){
    return Math.min.apply(null,array);
}

//document.getElementById("teste").innerHTML = MenorNumero(numeros);

//FILTRAGEM DE NÚMEROS
const maior20 = numeros.filter(filtragem);

function filtragem(value,index,array){//valor, indice e matriz
    return value>20;
}

document.getElementById("teste").innerHTML = maior20;