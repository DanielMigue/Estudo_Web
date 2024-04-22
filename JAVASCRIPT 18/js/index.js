/*MANIPULAR DATAS EM JAVASCRIPT*/

//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
//console.log(data);

//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
//console.log(ano)

//PEGAR O MES ATUAL - DE 0 ATÉ 11 SENDO JANEIRO 0 E 11 DEZEMBRO COMO UMA MATRIZ
let mes= data.getMonth();
//console.log(mes);

const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
]

//MOSTRA O MÊS NO FORMATO ESCRITO
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito)

//PEGAR O DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

//PEGAR  DIA DA SEMANA - 0 até 6(Como matriz)
let diaSemana = data.getDay();
console.log(diaSemana);//hoje é segunda retorunou 1

const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];

let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);//retornou em string "segunda"

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora);

//PEGAR A MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);

//PEGAR A MINUTOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

//PEGAR A MINUTOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString('pt-br');//retorna o ano e a hora
console.log(dataBR);
let somenteAno = data.toLocaleString('pt-br',{dateStyle: 'short'});//retorna só o ano
console.log(somenteAno);
let somenteHora = data.toLocaleString('pt-br',{timeStyle:'short'});//retorna o ano e a hora
console.log(somenteHora);
//____________________________________
//PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes= d.getDate();//pega o dia do mes
mes= d.getMonth() + 1;//pega o mes
ano = d.getFullYear();//pega o ano

function addZero(x){
    return x<10 ? '0' + x : '' + x// ? = então, : = se não
}

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR)
//________________________________________________
//COMPARAR DATAS - MAIOR OU MENOS. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2022,0,15)//padrao ano, mes e dia, e os dados conforme o JavaScript entende

if(hoje>vencimento){
    console.log("Sua conta está vencida!");
}else{
    console.log("Ainda não venceu, tudo certo!")
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2025,11,31);//Final do ano

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();//pegando os tempos de cada e subtraindo

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));//Converte o milesimo de segundos para dias

console.log(diferencaDias + "dias");//Retorna a quantidade de dias para a virada do ano. Se a data inicial for maior, ele da em negativo como se fosse no passado, nesse código ele me retornou 618 dias





