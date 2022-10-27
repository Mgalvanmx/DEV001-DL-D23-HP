//import { example } from './data.js';
import data from './data/harrypotter/data.js';

const personaje = data.characters;

personaje.forEach((personaje) => {
    let nombre = personaje.name;
    const article = document.createElement("article");
    article.className = "nombres";
    const content = document.createTextNode(nombre);
    const image = document.createElement('img');
    image.src  = '/rayo.png';
    image.className ="imagen"
    article.append(content, image);
    let addArticle = document.getElementById("section");
    addArticle.insertAdjacentElement("beforeend", article);    
});

//console.log(example, data);
