'use strict';

const gifTrendingListContainer = document.querySelector('#trending-gifs');

const gifListContainer = document.querySelector('#gifs-list');

const API_KEY = '9EQlIhW5n42ueK7Crl0DrCUllyxttvDQ';

const trendingGifs = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`)
  .then( (response) => {
    return response.json();  
  })
  .then((data) => {
    console.log('data', data)
    return trendingGifs;
})


    // const article = document.createElement('article');
    // article.innerHTML = `
    //   <img src="${data.sprites.front_default}" />
    //   <h3>${data.name}</h3>
    // `

    // pokemonList.appendChild(article);
