/*
Laços oferecem um jeito fácil e rápido de executar uma ação repetidadas vezes
 */

// for (let i=0; i<10001;i++){
//     document.getElementById("teste").innerHTML += i + ", ";   
// }


//pega o ano
//var ano = new Date().getFullYear();


//for para alimentar um campo do tipo select
// for(let i=ano; i>=1900; i--){
//     document.getElementById("ano").innerHTML += "<option value='" + i + "'>"+ i +"</option>";
// }

const carros = ["Gol","Fusca", "Brasília","Del Rey","Chevette"]

//ver o tamanho da lista
var tamanho = carros.length;

for(let i=0;i<tamanho;i++){
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}

