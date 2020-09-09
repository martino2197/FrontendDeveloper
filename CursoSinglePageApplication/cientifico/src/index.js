// console.log('Hello');
import router from './routes';

window.addEventListener('load', router); //se encarga de escuchar la aplicacion

window.addEventListener('hashchange', router); //se encarga de escuchar las rutas