const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api) //Espera a que se cumpla esta peticion antes de pasar a la otra
        const character = await fetchData(`${API}${data.results[0].id}`); //Espera a que se cumpla esta peticion antes de pasar a la otra
        const origin = await fetchData(character.origin.url); //Espera a que se cumpla esta peticion antes de pasar a la otra

        console.log(data.info.count); //Me va a traer el numero de personajes que tiene esta api de la primera peticion
        console.log(character.nmae); //Rick sanchez
        console.log(origin.dimension); //Universo

    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');
