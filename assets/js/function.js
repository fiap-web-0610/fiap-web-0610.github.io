
const resultado = document.querySelector("#resultado");


let myFunc1 = {
    showArguments(){
resultado.innerHTML = arguments;
console.log(arguments);
    },
};

//chamando a função
myFunc1.showArguments(
    "Vai corinthias",
"Full-stack Developer",
"React",
"NodeJS",
"Tyescript"

    );
// arrow functions não acessa arguments
    let myFunc2 = {
        showArguments: () => {
   // resultado.innerHTML = arguments;
    //console.log(...arguments);
        },
    };

    myFunc2.showArguments(
        "Vai corinthias",
    "Full-stack Developer",
    "React",
    "NodeJS",
    "Tyescript"
    
        );


        let user = {
            name: "Laura Montenegro",
            usandoArrow: () => {
                console.log("Meu nome é", this.name, "Arrow Function");
            },
            usandoNominal() {
                ("Meu nome é", this.name, "Nominal Function");

            },
        };

        user.usandoArrow();
        user.usandoNominal();