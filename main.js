const pizzaListing = document.querySelector('.pizza-listing');

fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
    .then(response => response.json())
    .then(data => {
        data.forEach(pizza => {
            const pizzaItem = document.createElement('div');
            pizzaItem.classList.add('pizza-item');

            const pizzaImage = document.createElement('img');
            pizzaImage.src = pizza.image_url;
            pizzaImage.alt = pizza.name; 
            pizzaItem.appendChild(pizzaImage);


            const pizzaName = document.createElement('h2');
            pizzaName.textContent = pizza.name;
            pizzaItem.appendChild(pizzaName);

            const pizzaDescription = document.createElement('p');
            pizzaDescription.textContent = pizza.description;
            pizzaItem.appendChild(pizzaDescription);

            const pizzaPrice = document.createElement('p');
            pizzaPrice.innerHTML = `<strong>Price: $${pizza.price.toFixed(2)}</strong>`;
            pizzaItem.appendChild(pizzaPrice);

            pizzaListing.appendChild(pizzaItem);
        });
    })
    .catch(error => console.error(error));