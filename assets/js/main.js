// trabalhando com javascript em um arquivo externo


console.log(nome, "chamando variável criada com var");

var nome ="Fiap";

// 4 formas de criar função em javascript
//função nominal - sofre hoisting

function escreve(titulo){
    alert(titulo);
}


function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}

// expressão de função
// função anônima
mudaTitulo("Vai corinthias");

const mudaTitulo2 =  function(novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
}

mudaTitulo2("trocando o subtítulo")

// arrow function, criada em 2015
// não existe this dentro de uma arrow function
const relogio = ()=>{
    const date = new Date();
   mudaTitulo2(date.toLocaleTimeString());
};
setInterval(relogio, 1000);