/**Operador de reposo (puede extraer las propiedades de un objeto que aun no se ha construido) */
const obj = {
    name: 'Martin',
    age: 23,
    country: 'MX'
}

// let { name, ...all } = obj //utilizamos el operador de reposo para separar los elementos
// console.log(name, all);

let { country, ...all } = obj;
console.log(all);

/**Propiedades de propagacion */

const obj = {
    name: 'Martin',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1);


/**Promise.finally (podemos saber cuando ha terminado el llamado y poder ejecutar logica de funcion segun sea el caso)*/

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))



/**Regex */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);