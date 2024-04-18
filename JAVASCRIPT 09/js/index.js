/*
OBJETOS
Objetos são basicamente variáveis com muitos valores dentro*/

let carro = {
    marca:"ford",
    modelo:"ka",
    ano:2015,
    placa:"ABC-1234",
    buzina: function(){
        alert('Biiiiiiiii')
    },

    completo: function(){
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
    }
};

console.log(carro.completo())//puxando a função completo
// console.log(carro.buzina())
// console.log(carro)//puxando os atributos do carro

// carro.buzina();//navegador da um alerta "biii..."
