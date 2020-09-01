//En la consola: npm install xmlhttprequest --save

// Implementación de una API con XMLHttpRquest

// Instanciando el request.
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Funcion que nos trae la informacion desde el API y a la cual le estamos pasando un callback

function fetchData(url, callback) {

    //referencia al objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest()

    /* 
    A nuestra referencia xhttp le pasamos un LLAMADO 'open'
    donde: parametro1 = el metodo, parametro2 = la url,
    parametro3 = verificación si es asincrono o no, valor por defecto true
    */
    xhttp.open('GET', url_api, true); //hacemos el llamado a la url, el tercer Parametro es para indicar que se maneje de manera asincrona (true)

    //Escuchar lo que va hacer la conexion, si el cambio sucede entonces ejecuto una funcion que recibe un evento
    //Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = function (event) {
        
         //Este espacio me permite hacer una validacion, para saber si ejecuto mi callback
         if (xhttp.readyState === 4) { //valido que este en un determinado estado

            //Verificar estado, aqui un resumen de los casos mas comunes:
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
             if (xhttp.status === 200) {

                //Estandar de node con callbacks, primer parametro error, segundo el resultado
                 callback(null, JSON.parse(xhttp.responseText)); //En node es un estandar (error, contenido)
             } else {
                 const error = new Error('Error ' + url_api);
                 return callback(error, null); //En node es un estandar (error, contenido)
             }
         }
    }

    xhttp.send(); //Se envia la solicitud
}

/**
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready 
PD: recuerda estas trabajando con una API externa osea un servidor por lo que
depende del servidor cuanto demore en cada estado haces un pedido por datos
(request) y solo es aplicar lógica.
https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp 
*/

/**
 * Aclaraciòn de varias cosas que quizás no entiendas si estas empezando:

XMLHttpRequest es la forma antigua de hacer llamados, como el profesor lo menciona usa ese y no Fetch que es el actual, por que no conocemos aùn las promesas y fecth es con promesas, para saber por que el profesor uso OPEN y todas esas funciones aqui està la forma de usar XMLHttpRequest : https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

" new Error " que el profesor crea, es una nueva instancia de la clase Error que tiene Javascript, son clases ya implicitas que tiene javascript en este caso es para monstrar bien un mensaje de error podemos usarla, màs informaciòn aqui : https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error.

Para los que son fron-end y están aprendiendo de Back, el profesor uso GET por que hace parte de los método http, en este caso necesitamos pedir información a las url ,màs información: https://developer.mozilla.org/es/docs/Web/HTTP/Methods

Por ultimo recomiendo una escucha atenta a lo que dice el profesor por que el explica el por que de cada cosa que hace y si no la conoces recomiendo buscarlas en Internet y asì avanzas en el curso. */