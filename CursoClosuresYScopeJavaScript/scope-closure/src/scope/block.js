const fruits = () => {
    if(true) {
        var fruits1 = 'apple'; //la declaracion de var se establece dentro del bloque y dentro de todo el scope de la funcion
        let fruits2 = 'banana'; //la declaracion de let se establece unicamente dentro del bloque
        const fruits3 = 'kiwi'; //la declaracion de const se establece unicamente dentro del bloque

        console.log(fruits2);
        console.log(fruits3);
    }
    
    console.log(fruits1);
    // console.log(fruits2); Error: solo se establecion dentro del bloque y no en el scope de la funcion
    // console.log(fruits3); Error: solo se establecion dentro del bloque y no en el scope de la funcion
    /**La razon la que la impresion de apple se pueden realizar es debido a que las declaraciones de mis variables, si bien estan dentro de un bloque en if() { *Declaracion }, continuan dentro del scope de la funcion, esto significa que pueden ser accedidas en todos los elementos de mi funcion. PERO ESTO NO SUCEDE CON LET Y CONST*/
}

fruits();

let x = 1; //global
{
    let x = 2; //local dentro del bloque
    // var x = 2 //local dentro del bloque pero se transmite a global, como si la funcion fuera el contexto global y por ende la segunda impresion tambien seria 2
    console.log(x); //2
}
console.log(x); //1


const anotherFuntion = () => {
    for(let i = 0; i < 10; i++) { //Si se cambia el let por un var, el valor que se imprimiria siempre seria 10, en vez del conteo de 0 ... 9 Referencia a EventLoop(investigar)
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFuntion();