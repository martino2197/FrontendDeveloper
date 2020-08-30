/** Scope Global */
/*Variables Globales*/
var hello = 'Hello'; //asignación de forma global, podemos acceder a ella desde donde sea
var hello = 'Hello +'; //reasignar con var es una mala practica

let world = 'Hello World';
let world = 'Hello'; //con let yo no puedo reasignar

const helloWorld = 'Hello World!'; //con let yo no puedo reasignar



const anotherFuntion = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);    
}

anotherFuntion();

//MALA PRACTICA
const helloWorld = () => { //Estoy asignando una variable global a pesar de que esta dentro de una función, MALA PRACTICA
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);
//MALA PRACTICA

//MALA PRACTICA
const anotherFuntionAgain = () => {
    var localVar = globalVar = 'Im Global' //SI LA VARIABLES SE DEFINE SIN PALABRA RESERVADA (var, let, cont) SE TOMA COMO UNA VARIABLE GLOBAL
}

anotherFuntionAgain();
// console.log(localVar); NO FUNCIONA (variable local)
console.log(globalVar); //SI FUNCIONA (variable global)
//MALA PRACTICA

/**Scope Global */