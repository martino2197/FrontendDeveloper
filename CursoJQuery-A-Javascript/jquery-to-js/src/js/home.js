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


  const BASE_API = 'https://yts.mx/api/v2/';
  /*Funciones asíncronas**/

// Lo siguiente es equivalente al fetche que habiamos hecho anteriormente pero haciendolo en una funcion asincrona
// Codigo asincrono que se lee de una manera sincrona
(async function load() {
  //await nos sirve para esperar las peticiones del api
  //await
  //Mi categorias son : action drama animation

  async function getData(url) {
    const response = await fetch(url) // voy a pausar mi aplicacion hasta que mi fetch termine
    const data = await response.json() //recordemos que fetch nos retorna una promesa de forma nativa
    if (data.data.movie_count > 0) {
      //aqui se acaba
      return data
    } //Estamos validando datos
    //si no hay pelis aquí continua
    // return data
    throw new Error('No se encontro ningun resultado');
  }

    /**Selectores */

  // JQuery
  // const $homeJQ = $('.home .list #item'); //elementos de la clase home

  // Javascript vainilla
  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $actionContainer = document.querySelector('#action')
  const $dramaContainer = document.getElementById('drama')
  const $animationContainer = document.getElementById('animation')

  const $featuringContainer = document.getElementById('featuring')
  const $form = document.getElementById('form')
  const $home = document.getElementById('home')

  const $modalTitle = $modal.querySelector('h1')
  const $modalImage = $modal.querySelector('img')
  const $modalDescription = $modal.querySelector('p')

  function setAttributes($element, attributes) {
    // setAttributes($loader, {
    //   src: 'src/images/loader.gif',
    //   height: 50,
    //   width: 50,
    // })
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute])
    }
  }

  function featuringTemplate(peli) {
    return (
      `
      <div class="featuring">
        <div class="featuring-image">
          <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${peli.title}</p>
        </div>
      </div>
      `
    )
  }
  
  $form.addEventListener('submit', async (event) => {
    // debugger
    //el formulario esta recargando cada vez que nosotros estamos haciendo submit de ese formulario
    //por defecto un formulario envia los datos de cada input que tenga atraves de un metodo llamado GET() o POST()
    //Esto sirve para que el backendo reciba este envio de informacion a cierta url

    event.preventDefault(); //con esto le quitamos la accion por defecto que viene dentro del evento de submit

    $home.classList.add('search-active'); //De esta manera le colocamos la clase search-active a $home

    const $loader = document.createElement('img'); //con esto podemos crear elementos como div, span, p, etc..

    /**Aqui va la busqueda por medio del formulari */
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader);

    const data = new FormData($form); //con FormData(elemento html de formulario) podemos parsear un formulario

    /** Manejo de errores */
    try {

          /**Abajo vemos el ejemplo de la asignacion de una variable por desestructuración */

         // este const era para peli para despues utilizar peli.data.movies[0]
        const {
          data: {
            movies: pelis
          }
        } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`); //le damos forma a la url en donde vamos a buscar el titulo de la pelicula y vamos a limitar a 1 el numero de resultados que nos devuelva
    
        // otroNombre

        //en vez de pelis iba peli.data.movies[0]
        const HTMLString = featuringTemplate(pelis[0]) //De esta manera le estamos mandando directamente el resultado que obtumios al template
        // debugger
        $featuringContainer.innerHTML = HTMLString;
        // data.get('name') //el atributo name='name' permite obtener el valor de un elemento por medio de los .get()

    } catch(error) {
      // debugger
      alert(error.message);
      $loader.remove();
      $home.classList.remove('search-active'); //remueve la barra inferior donde suele mostrar la pelicula encontrada
    }


    
  })
  /**Aqui va la busqueda por medio del formulari */


  // let terrorList
  // getData('https://yts.mx/api/v2/list_movies.json?genre=terror')
  //   .then(function(data) {
  //     console.log('terrorList', data);
  //   })
  
  // console.log(actionList, dramaList, animationList );



    /** CREACIÓN DE TEMPLATES */
    function videoItemTemplate(movie, category) {
      return(
      `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
      )
    }

    function createTemplate(HTMLString) {
      /**Creación de DOM */
      const html = document.implementation.createHTMLDocument(); // Crea dentro de memoria de javascript un elemento html
      html.body.innerHTML = HTMLString //html seria como un selector, innerHTML nos sirve para madarle html al elemento
      // debugger
      return html.body.children[0];
     /**Creación de DOM */
    }

    function findById(list, id) {
      return list.find(movie => movie.id === parseInt(id, 10))
    }

    function findMovie(id, category) {
      switch (category) {
        case 'action': {
          return findById(actionList, id)
        }
        case 'drama': {
          return findById(dramaList, id)
        }
        default: {
          return findById(animationList, id)
        }
      }      
    }

    function showModal($element) {
      $overlay.classList.add('active')

      $modal.style.animation = 'modalIn .8s forwards' // .style el cual nos permite cambiar y agregar estilos inline (< style=" "> por encima de nuestro archivo css)

      /**Utilizando Dataset */
      const id = $element.dataset.id;
      const category = $element.dataset.category;
      /**Utilizando Dataset */

      const data = findMovie(id, category)
      debugger

      $modalTitle.textContent = data.title;
      $modalImage.setAttribute('src', data.medium_cover_image);
      $modalDescription.textContent = data.description_full
    }

    function addEventClick($element) {
      $element.addEventListener('click', () => {
        // alert('click')
        showModal($element)
      })
    }

    function hideModal() { //ocultamos el modal
      $overlay.classList.remove('active'); 
      $modal.style.animation = 'modalOut .8s forwards';
    }
  
    // console.log(videoItemTemplate('src/images/covers/bitcoin.jpg', 'bitcoin'));
    function renderMovieList(list, $container, category) {
      // actionList.data.movies

      $container.children[0].remove(); //esta linea es para borrar el loader

      list.forEach((movie) => {
        // utilizamos una arrow funtion que esta heredando el contexto
        // debugger
        const HTMLString = videoItemTemplate(movie, category);
  
        const movieElement = createTemplate(HTMLString);
  

        // $actionContainer
        $container.append(movieElement); // De esta manera vamos agregando de una en una cada pelicula por cada iteracion del forEach()
        // Igual puede ser por seguridad ya que si se mete data directo en innerHTML puedes ser blanco de ataques XSS y con el método que uso Leonidas primero ese texto lo convierte y después se agrega con el append que es más seguro al elemento
  
        /**Animaciones */
        const image = movieElement.querySelector('img');

        //asignamos un evento
        image.addEventListener('load', (event) => {
          //event.srcElement. y event.target seria igual que poner image.
          event.target.classList.add('fadeIn');
        })
        

        /**Eventos */
        addEventClick(movieElement);
        /**Eventos */      


        /**Tambien podria hacerse de la sig manera si crear un DOM extra */
        // actionList.data.movies.forEach((movie) =>{
        //   constHTMLString = videoItemTemplate(movie);
        //   $actionContainer.innerHTML += HTMLString;
        // });
        /**Muchos se pregunta por qué Leónidas Esteban creo un Dom desde Javascript vanilla y ahí inserto los elementos html para posteriormente acceder a este domingo y copiar el contenido de este en el elemento del Dom visible.
            En ves de insertar directamente en el elemento del Dom visible.
            La respuesta a esto el no las al final de la clase, Leónidas Esteban nos comenta que esto funciona semejante a react el cual crea un Dom virtual, sólo que react hace más cosas con dicho Dom virtual sería más complicado de imitar en una sola clase.
        */
  
        // console.log(HTMLString);
      });
    }
    
    const { data: { movies: actionList } } = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
    renderMovieList(actionList, $actionContainer, 'action');

    const { data: { movies: dramaList } } = await getData(`${BASE_API}list_movies.json?genre=drama`)
    renderMovieList(dramaList, $dramaContainer, 'drama');

    const { data: { movies: animationList } } = await getData(`${BASE_API}list_movies.json?genre=animation`) 
    renderMovieList(animationList, $animationContainer, 'animation');

    console.log('actionList', actionList);
    console.log('terrorList', dramaList);
    console.log('animationList', animationList);

    
    $hideModal.addEventListener('click', hideModal)
    

})()

// load()