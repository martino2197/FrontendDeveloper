const fruits = () => {
    var  fruit = 'apple';
    console.log(fruit);
}

fruits();
console.log(fruit);

const anotherFuntion = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2; //MAL: las variables con let o const no se pueden volver a declarar
    //y = 2 Correcto: la reasignazion es valida para let
    console.log(x);
    console.log(y); 
}

anotherFuntion();