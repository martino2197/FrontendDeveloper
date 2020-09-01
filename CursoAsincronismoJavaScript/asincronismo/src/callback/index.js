function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) { //aqui recibimos el callback
    return callback(num1, num2)
}

console.log(calc(6, 2, sum));

function date(callback) { //aqui recibimos el callback
    console.log(new Date);
    setTimeout(() => {
        let  date = new Date;
        callback(date)
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);