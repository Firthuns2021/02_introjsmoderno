// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
import heroes from '../data/heroes';
// import heroes from "./data/heroes";
// import {heroes} from "../data/heroes";
// console.log( owners );

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find




export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( 'getHeroesByOwner: Marvel',getHeroesByOwner('Marvel') );
//
// console.log( 'getHeroesByOwner: DC',getHeroesByOwner('DC') );
