//toda vez que trabalharmos com esses elementos não precisa ficar repetindo
let contator= 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add'); 
let main = document.getElementById('areaLista')
function addTarefa(){
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        ++contator;//contabiliza o número de vezes que o main é feito
        let novoItem = `<div id="${contator}" class="item">
        <div onclick="marcarTarefa(${contator})" class="item-icone">
            <i id="icone_${contator}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contator})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">

            <button onclick="deletar(${contator})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button><!--lixeira do lado do deletar-->
        </div>
    </div>`
    
    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem//pega o conteúdo que já tem + o conteúdo injetado

    //ZERAR OS CAMPINHOS
    input.value = "";
    input.focus();//Ele deixa focado
    }

}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe=="item"){//siginicia que ainda nao foi clicado
        item.classList.add('clicado')//O classList faz a comunicação do javaScript e o CSS por meio das classes ele add(),remove() e togle()(adiciona e remove)

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');


        item.parentNode.appendChild(item);//parentNode = mostra o parentesco dele a área main. appendChild = adiciona um filho, que é o proprio item, e ele joga lá pra baixado ao ser clicado
    }else{//item clicado
        item.classList.remove('clicado')//O classList faz a comunicação do javaScript e o CSS por meio das classes ele add(),remove() e togle()(adiciona e remove)

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');

    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

//Preste atenção nesse item addEvent...
input.addEventListener("keyup", function(event) {
    //SE TECLOU ENTER (13)
    if(event.keyCode === 13){//Se pressionar a tecla enter...faça
        event.preventDefault();// Essa linha impede o comportamento padrão da tecla “Enter” (como enviar um formulário ou pular para a próxima linha).
        btnAdd.click();//Pega
    }
})