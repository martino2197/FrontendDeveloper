/**Parametros Por Defecto */

//antes de ecmaScript 6
function newFuntion(name, age, country) {
    var name = name || 'Martin';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6 
function newFuntion2(name = 'Martin', age = 23, country = 'MX') {
    console.log(name, age, country);
}

newFuntion2();
newFuntion2('Luis', 24, 'ITA');

/**Parametros Por Defecto */

/**Concatenacion */

let hello = 'Hello';
let world = 'world';

//antes de ecmaScript 6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6 (template literals)
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


/**LET y CONST, Multilínea */

//antes de ecmaScript 6
let lorem = "lo que yo quiero es deconstruir toda la funcion de mi lenguaje \n"
+ "otra deconstruccion epica que necesitamos." 

// es6 
let lorem2 = `otra deconstruccion de mi frase epica que necesitamos
ahora viene otra frase epica para recordar la importancia de ella
`;

console.log(lorem);
console.log(lorem2);

/**Destructuracion de elementos */

let person = {
    'name': 'Martin',
    'age': 23,
    'country': 'MX'
}

//antes de ecmaScript 6
console.log(person.name, person.age, person.country);

// es6
let { name, age, country } = person;
console.log(name, country);


/** Operador de propagacion ... (Spread Operator) */
let team1 = ['Oscar', 'Martin', 'Julian']
let team2 = ['Valeria', 'Camila', 'Yesica']

// es6
let education = ['Davida', ...team1, ...team2];
console.log(education);



/**LET y CONST */
{
    var globalVar = 'Global Var' //esta disponible de forma global
}

{
    let globalLet = 'Global Let' //solo esta disponible en el bloque de codigo donde fue definido
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
// a = 'a' No se permite la reasignacion




/**Arrow Functions, Promesas y Parámetros en objetos */

/**Parametros en Objetos */
let name = 'Martin'
let age = 23

//antes de ecmaScript 6
obj = { name: name, age: age }
console.log(obj);

// es6
obj2 = { name, age }
console.log(obj2);


/**Arrow Funtions */

const names = [
    {name: 'Martin', age: 23 },
    {name: 'Luis', age: 24}
]

//antes de ecmaScript 6
let listOfNames = names.map(function (item) {
    console.log(iten.name);
})

// es6
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    ...
}

//para un solo elemento
const listOfNames4 = name => {
    ...
}

const square = num => num * num; //recibe un numero que sera multiplicado por si mismo y al final lo retorna

/**Promesas */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Upss!!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola')) //Puede haber multiples .then()
    .catch(error => console.log(error));


/**Clases, Módulos y Generadores */

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


/**Módulos */
import { hello } from './module';

hello();


/**Generadores */
function* helloWorld(params) {
    if (true) {
        yield 'Hello, '; //yiel permite retornar y guardar el estado de forma interna
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);