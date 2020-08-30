const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello); //Esta variable solo esta asignada dentro de este bloque de codigo
}

helloWorld();
console.log(hello); //No se puede acceder a hello por que no esta definida de forma global

var scope = "i am global";

const funtionScope = () => {
    //Ambito lexico: mi funcion tendra el acceso al scope local y sobre la cual se va a trabajar
    var scope = 'i am just a local';
    const func = () => {
        return scope; //retorna el scope local por que mi Ambito Lexico me esta dando acceso a ella.
    }
    console.log(func()); //
}

funtionScope(); // 'i am just a local'
console.log(scope); // "i am global"