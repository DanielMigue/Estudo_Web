/*EVENTOS
Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick - > Disparado quando recebe clique duplo.
onmouseover -> Disparado quando o mouseestá sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado
onfocus -> Disparado quando o elemento recebe o foco. Válido para input
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur - > Disparado quando uma tecla é pressionada.
onkeydown > Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.

complementar: https://bit.ly/3FLdjDE
 */

function eventoClick(){
    // alert('Acionou um evento de click')
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    alert('Evento de clique duplo');
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red"
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue"
}

// function adicionaTexto(){
//     let p = document.getElementById("texto");
//     p.append('O mouse moveu<br>');
// }

// function limpaTexto(){
//     document.getElementById("campoTexto").value = "";
// }

function mudou(){
    console.log('Mudou')
}

function teclaPressionada(){
    console.log('Tecla pressionada')
}