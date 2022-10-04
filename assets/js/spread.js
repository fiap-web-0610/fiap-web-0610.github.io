const aereasNacionais = ['Azul', 'Gol', 'Latam'];

const airCompanies = [
    ...aereasNacionais,
    'Delta',
    'United Airlines', 
    'Emirates', 
    'Qatar',
    'Tap',
];

    console.log(airCompanies);

    //atribuição por destruturação
    //0 - Azul
    //1 - gol
    //2 - latam
    //3 - delta

    const [azul, gol, latam, delta, ...internacionais] =  airCompanies;

    console.log(delta, "verificando a variável delta");
    console.log(internacionais, "verificando a variável internacionais");

    //object relation map - orm - tabela sql ou documento NOsql - transforma em objetos
    //nodeJS - typeORM (definição de estrutura, criar tabelas - DDL) e prisma (manipular os dados)
    const user = {
 name: "Laura Montenegro",
 email: "lauranmontenegro@avanade.com",
 password: "123456",
    }

    const {password, ...data} = user;
    console.log(data, "retornando dados no API")


//eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos (função).
// Eventos de tempo - setTimeout, setInterval
// Eventos de DOM - onClick, onChange, onSubmit
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort

