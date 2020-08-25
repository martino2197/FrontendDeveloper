console.log('hola mundo!');

// EMACScript 6 const (constante) y let (variable), se depreca var
const noCambia = "Martin";

let cambia = "@LuisMartin"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise(function(todoBien, todoMal) {
  // Llamar a un api
  //Para hacer un delay de tiempo tenemos los timmers
  //setInterval (una funcion que se ejecuta cada cierto tiempo) y setTimeout(una funcion que se ejecuta una sola vez en determinado tiempo)
  setTimeout(function() {
  // luego de 3 
  
  // todoBien();
  todoBien('Se acabo el tiempo 5');
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  // Llamar a un api
  //Para hacer un delay de tiempo tenemos los timmers
  //setInterval (una funcion que se ejecuta cada cierto tiempo) y setTimeout(una funcion que se ejecuta una sola vez en determinado tiempo)
  setTimeout(function() {
  // luego de 3 
  
  // todoBien();
  todoBien('Se acabo el tiempo 3');
  }, 3000)
})



getUser
  .then(function() {
    console.log('Todo esta bien en la vida');
  }) //then() aplica si todo esta bien en mi promesa
  .catch(function(message) {
    console.log(message);
  }) //catch() aplica cuando nuestra promesa falla

  Promise.all([ /*all() es una funcion que recibe un array de promesas*/
    getUser,
    getUserAll,
  ])
    .then(function(message) {
      console.log(message);
    })
    .catch(function(message) {
      console.log(message);
    })

    Promise.race([ /*race() es una funcion que recibe un array de promesas y devulve el then de la primera promesa en terminar*/
      getUser,
      getUserAll,
    ])
      .then(function(message) {
        console.log(message);
      })
      .catch(function(message) {
        console.log(message);
      })