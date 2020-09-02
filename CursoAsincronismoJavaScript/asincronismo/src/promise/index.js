/**Promesas */
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

//La estructura de como trabajamos con las promesas
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))



const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000);
        } else {
            const error = new Error('Whoops!')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    // .then(() => console.log('hola')) //podemos encadenar .then()
    .catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array or results', response);
    })
    .catch(err => {
        console.error(err);
    })