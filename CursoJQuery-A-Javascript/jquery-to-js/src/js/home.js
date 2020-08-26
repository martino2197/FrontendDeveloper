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
  .then(function () {
    console.log("Todo esta bien en la vida");
  }) //then() aplica si todo esta bien en mi promesa
  .catch(function (message) {
    console.log(message);
  }); //catch() aplica cuando nuestra promesa falla

Promise.all([
  /*all() es una funcion que recibe un array de promesas*/ getUser,
  getUserAll,
])
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });

Promise.race([
  /*race() es una funcion que recibe un array de promesas y devulve el then de la primera promesa en terminar*/
  getUser,
  getUserAll,
])
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });


// Tutorial de Ajax en jQuery y Javascript

$.ajax('https://randomuser.me/api/', {
  method: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.log(error);
  }
})  // esto es un XMLHttpRequest

// Utilizando Javascript vainilla

fetch("https://randomuser.me/api/") //fetch() me va a devolver una promesa
  .then(function (response) {
    // console.log(response);
    return response.json(); //nuestra respuesta tiene un metodo llamado json() y devuelve una PROMESA
  })
  .then(function (user) {
    //este .then() va a reaccionar cuando se acabe de resolver la promesa del response.json(), es una promesa encadenada
    console.log("user", user.results[0].name.first);
  })
  .catch(function() {
    console.log('algo falló');
  });


// Funciones asíncronas

// Lo siguiente es equivalente al fetche que habiamos hecho anteriormente pero haciendolo en una funcion asincrona
// Codigo asincrono que se lee de una manera sincrona
(async function load() {
  //await nos sirve para esperar las peticiones del api
  //await
  //Mi categorias son : action drama animation

  async function getData(url) {
    const response = await fetch(url) // voy a pausar mi aplicacion hasta que mi fetch termine
    const data = await response.json() //recordemos que fetch nos retorna una promesa de forma nativa
    return data
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
  // let terrorList
  // getData('https://yts.mx/api/v2/list_movies.json?genre=terror')
  //   .then(function(data) {
  //     console.log('terrorList', data);
  //   })
  console.log('actionList', actionList);
  console.log('terrorList', dramaList);
  console.log('animationList', animationList);
  // console.log(actionList, dramaList, animationList );


  /**Selectores */

  // JQuery
  // const $homeJQ = $('.home .list #item'); //elementos de la clase home

  // Javascript vainilla
  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $sactionContainer = document.querySelector('#action')
  const $dramaContainer = document.getElementById('#drama')
  const $animationContainer = document.getElementById('#animation')

  const $featuringContainer = document.getElementById('#featuring')
  const $form = document.getElementById('#form')
  const $home = document.getElementById('#home')

  const $modalTitle = $modal.querySelector('h1')
  const $modalImage = $modal.querySelector('img')
  const $modalDescription = $modal.querySelector('p')

})()

// load()