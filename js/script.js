"use strict"

const btnElement = document.getElementById("btn");

const outputElem = document.querySelector(".outputCats");


btnElement.addEventListener("click", () => {
    const url = "../json/cats.json"; 


    fetch(url)
        .then(res => res.json())
        .then(json => {
                // console.log(json);
                json.forEach(function(val) {
                    // Opretter et div element gemt i variablen
                   const catsContainer = document.createElement("div");

                    // Tilføjer en attribut til vores carContaienr
                    catsContainer.classList.add("cats-container");

                   // Opretter et div element gemt i variablen
                   const catsItem = document.createElement("div");

                      // Tilføjer en attribut til vores carItem
                      catsItem.classList.add("cats-Item");

                    // Opretter et img-element til bilen
                    const catsImage = document.createElement("img");

                    // Tilføjer et atribut til vores carImage
                    catsImage.classList.add("cats-image");

                    // Tilføjer src og alt til vores carImage       
                    catsImage.src = `${val.image_url}`;

                    catsImage.alt =`${val.name} ${val.breed}`;
                    
                    // Opretter unordered list med list items og tilføjer car-info til list-items 
                    const catsInfo = document.createElement("ul");

                    catsInfo.innerHTML = 
                    `
                    <li>${val.name} ${val.breed}</li>
                    <li>Weight:${val.weight}</li>
                    `;

                    catsItem.appendChild(catsImage);
                    catsItem.appendChild(catsInfo);
                    catsContainer.appendChild(catsItem);
                    outputElem.appendChild(catsContainer);

                })
            })
        

});

