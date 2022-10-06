const carrosDOM = document.querySelector("#carros");

const veiculos = [
    "Chevrolet", 
    "Ford", 
    "Fiat", 
    "VW", 
    "Honda", 
    "Toyota", 
    "Hyundai",
];

//push sempre vai inserir no final do array
veiculos.push("BMW", "Mercedes"); 

//unshift sempre vai inserir no início do array
veiculos.unshift("Audi"); 

//shift remove o primeiro elemento
const primeiro = veiculos.shift(); 
console.log("Removendo o primeiro elemento do array", primeiro);

//pop remove o último elemento
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

//removendo um elemento específico do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1); //na posição 2, que foi declarada na const, remova um elemento

//removendo mais de um elemento do array
const removidos = veiculos.splice(1, 2); //na posição 1, remova dois elementos

//removendo e adicionando elementos
const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini"); //na posição 1, remova dois elementos e coloque os elementos entre aspas

//push e unshift devem ser colocado ANTES do forEach, senão não entrará na lista

veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option value="${key}">${value}</option>`;
});


//splice - remove e adiciona elementos

/////////////////////////////////////////////////////////////////////////////////
const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
//slice - retorna um novo array, o primeiro parâmetro é opcional e começa em zero
//o último parâmetro determina até onde deve ser filtrado, porém excluindo este último elemento
const newNba = nbaTeams.slice(3, 5); //posição que inicia e posição que termina

const primeiroNBA = nbaTeams.slice(0, 1); //0, 1 pega o primeiro - se colocar só 1, ele remove o primeiro e mostra o restante do array
const ultimoNBA = nbaTeams.slice(-1); //-1 pega o útimo elemento, mesmo se for adicionado novos no final

console.log(primeiroNBA);
console.log(ultimoNBA);
console.log(nbaTeams);
console.log(newNba);

//slice - retorna um novo array

////////////////////////////////////////////////////////////////////////////////
//map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = "Priscila Andrade Neves";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" "); //vai juntar o array na posição 0 com a última posição - o join significa: transforme em um texto separado por espaço
console.log(nameComplete);




const procuraCeltic = (nomeTime) => {
    return nomeTime == 'Celtics' || nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic); //retorna um novo array, mapeando/percorrendo e buscando no array anterior - true, false, true, por ex
const celticsFilter = nbaTeams.filter(procuraCeltic); //retorna um novo array, procura do começo ao fim do array anterior, quem retornou true para a função usada
const celticsFind = nbaTeams.find(procuraCeltic); //retorna a primeira ocorrência de uma busca com o parâmetro que a função determinou

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "find");