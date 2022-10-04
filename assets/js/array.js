
const carrosDom = document.querySelector("#carros")

const veiculos = ["Chevrolet", "Ford", "Fiat", "Vw", "Honda", "Toyota", "Hyundai"]

//adiciona ao final do array
veiculos.push("BMW", "Mercedes");

//adciona no início do array
veiculos.unshift("Audi");

//removendo do início do array

const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//removendo do final do array
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

// removendo um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//removendo mais de um elemento do array, na posição 1 remova 2
const removidos = veiculos.splice(1, 2);

//removendo e adcionando elementos
const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini");


//forEach - para cada, para cada item do meu array. Laço de iteração para array, Sempre que queremos manipular o próprio array usamos o forEach.
veiculos.forEach((value, key)=>{
    carrosDom.innerHTML += `<option value="${key}">${value}</option>`;
});

/////////////////////////////////////////////

//splice remove e adiciona elementos

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

//slice retorna um novo array, o primeiro parâmetro é opcional, e começa em zero.
//o último parâmetro determina até onde deve ser filtrado, porém excluindo este último elemento

const newNba = nbaTeams.slice(3, 5);

console.log(nbaTeams.slice(3, 5));
console.log(newNba);

//slice retorna um novo array


///////////////////////////////////

//split quebra texto em array, o join pega um array e junta todo mundo

const name = "Laura Montenegro";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
console.log(nameComplete);

//array map

const procuraCeltic = (nomeTime) => {
 return  nomeTime == "Celtics", nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic); //retorna um array, mapeando e buscando no array anterior, ele não altera ordem e ele vai do começo até o fim
const celticsFilter = nbaTeams.filter(procuraCeltic); //ele traz só os true, ele busca do começa ao fim do array, eçe não traz os false
const celticsFind = nbaTeams.find(procuraCeltic); //ele para na primeira ocorrência, no primeiro true, ele não vai ate o fim do array

console.log(celticsMap, "map");
console.log(celticsFilter, "Filter");
console.log(celticsFind, "Find");
const celtics = nbaTeams.map(procuraCeltic);