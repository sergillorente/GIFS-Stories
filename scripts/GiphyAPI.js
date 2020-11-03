'use strict';

const gifTrendingListContainer = document.querySelector('#trending-gifs');

const gifListContainer = document.querySelector('#gifs-list');

const API_KEY = '9EQlIhW5n42ueK7Crl0DrCUllyxttvDQ';

//trending gifs home page
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


for (let index = 1; index <= 18; index++) {

  
}

//search gifs for selection page