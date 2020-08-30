const anotherFuntion = () => {
    /**Esto es un ejemplo de block y closure */
    for(let i = 0; i < 10; i++) { //el let nos da un ambito lexico de bloque 
        //Si se cambia el let por un var, el valor que se imprimiria siempre seria 10, en vez del conteo de 0 ... 9 Referencia a EventLoop(investigar)
        setTimeout(() => { //esto seria lo que compone el closure
            console.log(i);
        }, 1000)
    }
};

anotherFuntion();