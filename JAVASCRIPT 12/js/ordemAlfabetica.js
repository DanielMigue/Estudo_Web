const jogadores = [
    "Biro Biro",
    "Ribamar",
    "Pelé",
    "Maradona",
    "Neymar",
    "Cristiano Ronaldo",
    "Vampeta",
    "Dimitri",
];
//ORDEM ALFABÉTICA usa-se o sort
const jogOrdem = jogadores.sort();

document.getElementById("teste").innerHTML = jogOrdem;

//AO CONTRÁRIO
jogadores.sort();
jogadores.reverse();

document.getElementById("teste").innerHTML = jogadores;
