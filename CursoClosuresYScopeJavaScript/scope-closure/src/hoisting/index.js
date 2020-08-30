//El Hoisting eleva las declaraciones al momento de compilar, la variable pasa a estar por encima de la asignazcion
a = 2;
var a;
console.log(a); //2

/**Js solo utiliza el Hoisting en las declaraciones y no en las inicializaciones*/
console.log(a);
var a = 2;


nameOfDog('Elmo'); //Gracias al Hoisting funciona a pesar de estar antes de la declaracion de la funcion

function nameOfDog(name) {
    console.log(name);
}

// nameOfDog('Elmo');