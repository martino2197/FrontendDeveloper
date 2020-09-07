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