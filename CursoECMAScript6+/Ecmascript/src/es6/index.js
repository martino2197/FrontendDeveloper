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