/**ECMAScript 6 */
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Funcion que nos trae la informacion desde el API y a la cual le estamos pasando un callback
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    //referencia al objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    /* 
    A nuestra referencia xhttp le pasamos un LLAMADO 'open'
    donde: parametro1 = el metodo, parametro2 = la url,
    parametro3 = verificación si es asincrono o no, valor por defecto true
    */
    xhttp.open("GET", url_api, true); //hacemos el llamado a la url, el tercer Parametro es para indicar que se maneje de manera asincrona (true)

    //Escuchar lo que va hacer la conexion, si el cambio sucede entonces ejecuto una funcion que recibe un evento
    //Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = (() => {
      //Este espacio me permite hacer una validacion, para saber si ejecuto mi callback
      if (xhttp.readyState === 4) {
        //valido que este en un determinado estado

        /**if ternario */
        (xhttp.status === 200)
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error('Error', url_api))
        /**if ternario */
      }
    })
    xhttp.send(); //Se envia la solicitud
  });
};

module.exports = fetchData;

/**ECMAScript 6 */