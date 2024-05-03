const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=84699bc443137f4507f1678eafc77c9a&hash=8b6936448bc6e5613059ed52fa4291c3';
        const container = document.querySelector('#marverl-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then( res => res.json())
        .then((json) => {
            for(const hero of json.data.results) {
               let urlHero = hero.urls[0].url;
               contentHTML+=  `
               <div class="col-md-4">
                   <a href="${urlHero}" target="_blank">
                     <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                   </a>
                   <h3 class="title">${hero.name}</h3>
               </div>`;
            }
            container.innerHTML= contentHTML;
        })
    }
};

marvel.render();