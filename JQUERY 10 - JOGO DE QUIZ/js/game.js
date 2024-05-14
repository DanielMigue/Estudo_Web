/*VARIAVEIS DE CONTROLE DO NOSSO JOGO*/
let perguntasFeitas = [];

//PERGUNTAS DO JOGO
const perguntas=[
    //PERGUNTA 0
    {
        pergunta:"Qual dessas linguagens não é considerada uma linguagem de programação?",
        respostas: ["PHP","JavaScript","C++","HTML"],
        correta:"resp3"//A reposta é HTML
    },
    //PERGUNTA 1
    {
        pergunta:"Em que ano o Brasil foi descoberto?",
        respostas: ["1498","1375","1500","1828"],
        correta:"resp2"//A reposta é 1500
    },
    //PERGUNTA 2
    {
        pergunta:"O que significa a sigla HTML?",
        respostas: ["Hyper Tonto Maluco Legal","Hyper Text Markup Language","Hey Trade More Language","Hyper Text Mark Lang"],
        correta:"resp1"
    },
    //PERGUNTA 3
    {
        pergunta:"Qual dessas linguagens é considerada uma linguagem de marcação?",
        respostas: ["HTML","JavaScript","C++","PHP"],
        correta:"resp0"
    },
    //PERGUNTA 4
    {
        pergunta:"Quantas vezes o Brasil não foi para a copa?",
        respostas: ["Sempre foi","2","3","1"],
        correta:"resp0"
    },
]
// console.log(perguntas[1].pergunta);// mostra "Em que ano o Brasil foi descoberto?"
var qtdPerguntas = perguntas.length - 1;//pega a quantidade que tem dentro do array - 1 pra se encaixar na quantidade de matriz
gerarPergunta(qtdPerguntas);

function gerarPergunta(maxPerguntas){
    //GERAR UM NUMERO ALEATORIO
    let aleatorio = (Math.random() * maxPerguntas).toFixed();//toFixed deixa,inteiro. Math é função matematica, random é um numero randomizado(aleatorio)

    //CONVERTE PARA NUMERO
    aleatorio = Number(aleatorio);//Por causa do toFixed tem que converter pra number

    //MOSTRA NO CONSOLE QUAL FOI A PERGUNTA SORTEADA
    console.log('A pergunta sorteada foi a: ' + aleatorio);

    //VERIFICAR SE A PERGUNTA SORTEADA JÁ FOI FEITA
    if(!perguntasFeitas.includes(aleatorio)){//se nao está incluido no perguntas ja feitas
        //COLOCAR COMO PERGUNTA FEITA
        perguntasFeitas.push(aleatorio);

        //PREENCHER O HTML COM OS DADOS DA QUESTAO SORTEADA
        var p_selecionada = perguntas[aleatorio].pergunta;
        console.log(p_selecionada);

        //ALIMENTAR A PERGUNTA VINDA DO SORTEIO
        $("#pergunta").html(p_selecionada);//mostra a pergunta no h2
        $("#pergunta").attr('data-indice',aleatorio);//mostra o número do indice do array

        //COLOCAR AS RESPOSTAS
        
        for(var i=0;i<5;++i){
            $("#resp" + i).html(perguntas[aleatorio].respostas[i])
        }

        /*
        var resp0 = perguntas[aleatorio].respostas[0];
        $("#resp0").html(resp0)

        var resp1 = perguntas[aleatorio].respostas[1];
        $("#resp1").html(resp1)

        var resp2 = perguntas[aleatorio].respostas[2];
        $("#resp2").html(resp2)

        var resp3 = perguntas[aleatorio].respostas[3];
        $("#resp3").html(resp3)
        */

        //EMBARALHAR AS RESPOSTAS
        var pai = $("#respostas");
        var botoes = pai.children();//children é um método do jQuery para pegar todos os filhos de uma determinada div pai

        for(var i=1; i < botoes.length;i++){
            pai.append(botoes.eq(Math.floor(Math.random() * botoes.length)));//eq indica qual que é o indice, floor arredonda
        }             
    }else{
        //SE A PERGUNTA JÁ FOI FEITA
        console.log('A pergunta já foi feita. Sorteando novamente...')
        if(perguntasFeitas.length < qtdPerguntas+1){
            return gerarPergunta(maxPerguntas)
        }else{
            console.log('Acabaram as perguntas!')
            $('#quiz').addClass('oculto');
            $('#mensagem').html('Parabéns você venceu. Acertou todas as perguntas!')
            $('#status').removeClass('oculto');
        }
    }
}

$('.resposta').click(function(){
    if($('#quiz').attr('data-status')!=='travado'){
        
        //PERCORRER TODAS AS RESPOSTAS E DESMARCAR A CLASSE SELECIONADA
        resetaBotoes();
        
        //ADICIONAR A CLASSE SELECIONADA
        $(this).addClass('selecionada')
    }
});

    //BOTAO DE CONFIRMAR
$("#confirm").click(function(){
    //PEGAR O INDICE DA PERGUNTA
    var indice = $('#pergunta').attr('data-indice');

    //QUAL É A RESPOSTA CERTA
    var respCerta = perguntas[indice].correta;

    //QUAL FOI A RESPOSTA QUE O USUARIO SELECIONOU
    $('.resposta').each(function(){
        if ($(this).hasClass('selecionada')){
            var respostaEscolhida = $(this).attr('id'); 

            if(respCerta == respostaEscolhida){
                console.log('Aceeertou Miseraveee!!!');
                proximaPergunta();
            }else{
                console.log('Errrrooooooou')
                $('#quiz').attr('data-status','travado')
                $('#confirm').addClass('oculto')
                $('#'+respCerta).addClass('correta');
                $('#'+respostaEscolhida).addClass('errada');
                $('#'+respostaEscolhida).removeClass('selecionada');
                setTimeout(function(){
                    gameOver();
                },4000)//Em 4 segundos ele vai dar um novo jogo
            }
        }
    })
});

function newGame(){
    $('#confirm').removeClass('oculto')
    $('#quiz').attr('data-status','ok')
    perguntasFeitas=[];//zerou o array
    resetaBotoes();
    gerarPergunta(qtdPerguntas);
    $('#quiz').removeClass('oculto');//ele adiciona a classe oculto
    $('#status').addClass('oculto');
}
function proximaPergunta(){
    resetaBotoes();
    gerarPergunta(qtdPerguntas);
}

function resetaBotoes(){
    //PERCORRER TODAS AS RESPOSTAS E DESMARCAR A CLASSE SELECIONADA
    $('.resposta').each(function(){//each->percorrer todos os arrays(botoes) que tem a classe resposta
        if($(this).hasClass('selecionada')){
            $(this).removeClass('selecionada');
        }
        if($(this).hasClass('correta')){
            $(this).removeClass('correta');
        }
        if($(this).hasClass('errada')){
            $(this).removeClass('errada');
        }
    })
}
function gameOver(){
    //oculto tem display none, então no html
    $('#quiz').addClass('oculto');//ele adiciona a classe oculto
    $('#mensagem').html('Game Over!');
    $('#status').removeClass('oculto');//remove a classe oculto, mostrando apenas o game over
}

$('#novoJogo').click(function(){
    newGame();
})

