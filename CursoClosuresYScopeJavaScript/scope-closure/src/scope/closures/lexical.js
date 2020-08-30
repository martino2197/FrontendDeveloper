const buildCount = (i) => {
    let  count = i;
    const displayCount = () => {
        console.log(count++); //El valor se imprime y despues se incrementa, ++count se incrementa y luego se imprime
    }
    return displayCount;
}
//El ambito lexico es las funciones que se ejecutan utilizando la cadena del alcance que estaba vigente en su momento

const myCount = buildCount(1);

myCount(); //1
myCount(); //2
myCount(); //3

const myOtherCount = buildCount(10);
myOtherCount(); //10
myOtherCount(); //11