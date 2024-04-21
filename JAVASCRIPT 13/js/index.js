/*if e else
ajuda na validação de formulários
*/ 

//EXEMPLOS
// var interruptor = "off";

// if (interruptor=="on"){
//     alert('A lampada está ligada');
// } else{
//     alert('A lampada está desligada')
// }
//___________________________________
// var hora = new Date().getHours();

// if(hora < 12){
//     alert('Bom dia')
// }else if(hora<18){
//     alert('boa tarde')
// }else{
//     alert('Boa noite')
// }
//_____________________
function verificar(){
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome== null){
        //mostra que o campo não pode ser vazio
        let p = document.getElementById("teste")
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red"; 
    }else{
        //mostra que o usuário fez tudo certinho
        let p = document.getElementById("teste")
        p.innerHTML = "Parabéns tudo certinho";
        p.style.color = "green"; 
    }
}