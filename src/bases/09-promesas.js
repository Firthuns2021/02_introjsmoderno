
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise



import {getHeroeById} from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//
//    setTimeout( () =>  {
//
//        const p1 = getHeroeById(2)
//        // console.log('Heroe=',p1)
//        resolve( p1);
//        // reject('No se pudo encontrar el héroe');
//      }, 2000 )
//
//  });
//
// promesa.then( () => {
//     console.log('Then de la promesa')
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = (id )=> {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {

            const p1 = getHeroeById(id)
            p1 === undefined ? reject( 'Hero not found' ) : resolve( p1 )
        }, 2000 )

    });
    // return promesa;
}

getHeroeByIdAsync(1)
    .then( console.log)
    .catch( console.warn)


// .then( heroe => console.log('heroe', heroe))
