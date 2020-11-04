'use strict';

const API_KEY = '9EQlIhW5n42ueK7Crl0DrCUllyxttvDQ';

//trending gifs home page
const gifTrendingListContainer = document.querySelector('#trending-gifs');

if (gifTrendingListContainer) {
  fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`)
  .then( (response) => {
    return response.json();  
  })
  .then((data) => {
    console.log('data', data)
    
    data.data.forEach((gifObject) => {
      const card = document.createElement('div')
      card.classList.add("card")
      card.innerHTML = `
      <img width="100%" src=${gifObject.images.original.url} class="card-img-top" alt=${gifObject.title}>
      <div class="card-body">
      <h5 class="card-title">${gifObject.title}</h5>
      </div> `; 
      
      gifTrendingListContainer.appendChild(card);
    })
    
  })
}


//selection page
const gifListContainer = document.querySelector('#gifs-list');

if (gifListContainer) {
  const searchInput = document.querySelector('#search');
  const searchButton = document.querySelector('#search-button');

  const handleSearchBar = (event) => {
    event.preventDefault();

    const searchTerm = searchInput.value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=18`)
    .then( (response) => {
      return response.json();  
    })
    .then((data) => {
      console.log('data', data)

      data.data.forEach((gifObject) => {
        const card = document.createElement('div')
        card.classList.add("card")
        card.innerHTML =  `
        <img width="100%" src=${gifObject.images.original.url} class="card-img-top" alt=${gifObject.title}>
        <div class="card-body">
          <h5 class="card-title">${gifObject.title}</h5>
        </div> `;
      
        gifListContainer.appendChild(card);
      })
    });
  }

  const addListener = () => {
    searchButton.addEventListener('click', handleSearchBar);
  }    

  window.addEventListener('load', addListener );
}


