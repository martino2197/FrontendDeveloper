/**Object entries (devuelve los valores de una matriz) */

const data = {
    frontend: 'Martin',
    backend: 'Luis',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


/**Object Values (devuelve los valores de un objeto a un arregl) */

const data = {
    frontend: 'Martin',
    backend: 'Luis',
    design: 'Ana',
}

const Values = Object.values(data)
console.log(Values);
console.log(Values.length);


/**Padding */
//nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));
console.log('food'.padEnd(12, '-----'));