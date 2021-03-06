// https://developers.giphy.com/
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API
// https://developers.giphy.com/dashboard/
// https://developers.giphy.com/docs/api/endpoint#random

const apiKey = 'pq0HC7iUjm4MpKxxYw4w03kpxdd2cQI6';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );

