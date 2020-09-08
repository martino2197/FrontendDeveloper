
/**method flat (devolver una matriz con una submatriz aplanada) */ 
//recibe como argunmento la profundidad
let array1 = [1,2,3, [1,2,3, [1,2,3]]]
console.log(array1.flat()); //[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array1.flat(2)); //[1, 2, 3, 1, 2, 3, 1, 2, 3]


/**flatMap (mapear cada elemento, luego pasarle una funcion y aplanar) */
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));


/** trim (permite quitar los espacios al inicio o al final dependiendo de la funciona.)*/
let hello1 = '    hello world';
console.log(hello1);
console.log(hello1.trimStart());

let hello2 = 'hello World :D   '
console.log(hello2.trimEnd());


/**optional catch biding */

//antes
try {
    
} catch (error) {
    error
}

// es10
try {
    
} catch {
    error
}

/**fromEntries */

let entries = [['name', 'Luis'], ['age', 23]]

console.log(Object.fromEntries(entries));


/**symbol object */
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);