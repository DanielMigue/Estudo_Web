/*
 JSON é uma forma de transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

 Para trabalhar com JSON no JavaScript usamos dois métodos:

 JSON.parse() -> Converte texto no padrão JSON em objetos
 JSON.stringify() -> Converte objetos em texto padrão JSON

 TRANSFORMAR UM OBJETO EM TEXTO E UM TEXTO EM OBJETO
*/

//******************ENTENDENDO COMO FUNCIONA A CONVERSÃO******************

//OBJETO CARRO
// const carro = {
//     marca: "fiat",
//     modelo: "Uno",
//     ano: 2001
// }

// //CONVERTEU PARA TEXTO JSON
// let texto = JSON.stringify(carro)

// //COLOCOU O TEXTO NO NOSSO HTML
// document.getElementById('area').innerHTML = texto;


// //CONVERTEMOS TEXTO EM OBJETO
// let obj = JSON.parse(texto);

// //PEGAMOS UM VALOR DESTE OBJETO
// console.log(obj.modelo);

//_________________________________________________________

const ajax = new XMLHttpRequest();//método para fazer requisição a um site de forma remota
ajax.open('GET','https://viacep.com.br/ws/85802000/json/');//abre e pega as informações do site
ajax.send();//envia a solicitação

ajax.onload = function(){//quando ele carregar as informações, eu quero que aconteça o seguinte
    document.getElementById('area').innerHTML = this.responseText;//coloque na área do meu site

    //puxou uma informação específica
    let obj = JSON.parse(this.responseText);
    alert(obj.ddd);
}