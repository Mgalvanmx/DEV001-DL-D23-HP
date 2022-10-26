import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

const personajes = data.characters

const tittle = document.createElement("h1");
tittle.className = "titulo"
const root = document.getElementById("root");
tittle.innerText = "PERSONAJES"
root.appendChild(tittle);
/*
personajes.forEach((personaje, index) => {
    console.log(personaje.name, index);

})
*/

personajes.forEach(personaje => {
    const name = personaje.name;

    // Crear DIV
    const newDiv = document.createElement("div");
    newDiv.className = "tarjeta"
    const newContent = document.createTextNode(name);
    newDiv.appendChild(newContent);

    const img = document.createElement("img");
    img.src = "img/Rayo.png";

    // Add elemento DOM    
    const root = document.getElementById("root");
    root.appendChild(newDiv);
    root.appendChild(img)
});



