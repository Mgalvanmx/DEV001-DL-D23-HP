import { example } from './data.js';
import data from './data/harrypotter/harrypotter.js';

const personaje = data.characters
personaje.forEach((characters) => {

    //let nombres = document.getElementById("div1").innerHTML = characters.name;
    let nombres2 = characters.name;
    const div = document.createElement("container");
    const content = document.createTextNode(nombres2);
    div.appendChild(content);
    let añadirDiv = document.getElementById("div1");
    document.body.insertBefore(div, añadirDiv);

    console.log(nombres2);
});



console.log(example, data);
