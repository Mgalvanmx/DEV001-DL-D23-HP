import { example } from './data.js';
import data from './data/harrypotter/harrypotter.js';


   
    //let añadirDiv = document.getElementById("div1");
    //añadirDiv.insertAdjacentElement('beforeend', div);
    //console.log(nombres);
import { example } from './data.js';
import data from './data/harrypotter/data.js';


const personajes = data.characters
personajes.forEach(personaje => {
    const name = personaje.name;
   
// Crear DIV
    const newDiv = document.createElement("div");
    newDiv.className="tarjeta"
    const newContent = document.createTextNode(name);
    newDiv.appendChild(newContent);    
   // const img= document.createElement("img");
   // img.src=personaje. //
// Add elemento DOM    
    const root = document.getElementById("root");
    root.appendChild(newDiv);
});

//console.log(example, data);
