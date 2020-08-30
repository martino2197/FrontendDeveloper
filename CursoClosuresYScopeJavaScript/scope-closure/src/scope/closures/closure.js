const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

/**Estructura de clousere */

/**Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada. */
const moneyBox = () => { //No colocamos parametro aqui porque el parametro ya lo tiene countCoins(coins) que es la funcion que retornamos
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins} `);
    }
    return countCoins;
}
/**Estructura de clousere */

let myMoneyBox = moneyBox();

myMoneyBox(4); //4   es como si llamaramos a countCoins(4)
myMoneyBox(6); //10  es como si llamaramos a countCoins(6)
myMoneyBox(10); //20 es como si llamaramos a countCoins(10)