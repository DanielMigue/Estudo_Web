//const pessoa = ["Dimitri","Teixeira",30,"Professor"];//Array

//document.getElementById("teste").innerHTML = pessoa;//mostra os itens e acrescenta ",".

//__________________________________

//document.getElementById("teste").innerHTML = pessoa.join(" * ");//Troca a "," por "*".

//REMOVE UM ITEM NO ÚLTIMO ÍNDICE
//pessoa.pop();
//document.getElementById("teste").innerHTML = pessoa;//verificação

//ADICIONA UM ITEM NO ÚLTIMO ÍNDICE
//pessoa.push("Qualquer Coisa"); 
//document.getElementById("teste").innerHTML = pessoa;//verificação

//REMOVE UM ITEM DO PRIMEIRO ÍNDICE
//pessoa.shift();
//document.getElementById("teste").innerHTML = pessoa;

//Após as alteração os índices são alterados de acordo 

//ADICIONA UM ITEM NO PRIMEIRO INDICE
//pessoa.unshift("Bonitão");
//document.getElementById("teste").innerHTML = pessoa;

//outro metodo de remoção de item
//delete pessoa[0] //porém o campo fica indefinido(undefined), e os índices não se realinham, pois o que foi excluido foi o que tinha dentro e não o índice

//ADICIONA MÚLTIPLOS VALORES EM UMA DETERMINADA POSIÇÃO
//de acordo com a linha "1".

//pessoa.splice(1,0,"Item adicionado 1","item adicionado 2");//Na parte esquerda da vírgula indica em qual índice você quer colocar, na direita se vai ser deletado ou não e depois os valores que serão adicionados 
//document.getElementById("teste").innerHTML = pessoa;

//JUNÇÃO E CONCATENAÇÃO DE ARRAYS(MATRIZES)
const lista1 = ["Arroz","feijão","leite","macarrão"];
const lista2 = ["Suco", "refrigerante","carne"];
const lista3 = ["Salgadinho"];

const superLista = lista1.concat(lista2, lista3);//CONCATENA AQUI. Da para concatenar com quantas listas quiser

document.getElementById("teste").innerHTML = superLista;



