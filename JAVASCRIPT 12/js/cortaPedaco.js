const jogadores = [
    "Biro Biro",
    "Ribamar",
    "Pelé",
    "Maradona",
    "Neymar",
    "Cristiano Ronaldo",
    "Felipe Jonatan",
    "Dimitri",
];
const craques = jogadores.slice(2,6);//SLICE pega o conteúdo a apartir do índice marcado, ou também de um determinado item até outro como(2,6)

document.getElementById("teste").innerHTML = craques;
