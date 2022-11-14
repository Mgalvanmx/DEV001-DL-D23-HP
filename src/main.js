//import {filtrado} from './data.js';
import data from './data/harrypotter/data.js';

const personaje = data.characters;

personaje.forEach((personaje) => {
    let nombre = personaje.name;
    const front = document.createElement("article");
    front.className = "front";
    const content = document.createTextNode(nombre);
    front.append(content);

    let genero = personaje.gender
    let especie = personaje.species;
    if((especie === "Human") && (genero === "Male")){
        const image2 = document.createElement("img");
        image2.src = "img/harry.png";
        image2.className = "imagen2";
        front.append(image2);
    }
    else if((especie === "Human") && (genero === "Female")){
        const image4 = document.createElement("img");
        image4.src = "img/hermione.png";
        image4.className = "imagen4";
        front.append(image4);
    }
    else if (especie === "Human (formerly)") {
        const image3 = document.createElement("img");
        image3.src = "img/nick.png";
        image3.className = "imagen3";
        front.append(image3); 
    } 
    else{
        const image = document.createElement('img');
        image.src  = 'img/fowks.png';
        image.className ="imagen";
        front.append(image);
    }

    const {birth, death, species, ancestry, gender, patronus, house, books_featured_in} = personaje
    const back = document.createElement("article");
    back.className = "back";

    if(birth !== null){
        const parrafo = document.createElement("p"); 
        parrafo.textContent = "Birth: " + birth 
        parrafo.className = "info"
        back.append(parrafo)
    }
    if(death !== null){
        const parrafo = document.createElement("p"); 
        parrafo.textContent = "Death: " + death 
        parrafo.className = "info"
        back.append(parrafo)
    }
    if(species !== null){
        const parrafo = document.createElement("p"); 
        parrafo.textContent = "Species: " + species 
        parrafo.className = "info"
        back.append(parrafo)
    }
    if(ancestry !== null){
        const parrafo = document.createElement("p"); 
        parrafo.textContent = "Ancestry: " + ancestry
        parrafo.className = "info"
        back.append(parrafo)
    }
    if(gender !== null){
        const parrafo = document.createElement("p"); 
        parrafo.textContent = "Gender: " + gender
        parrafo.className = "info"
        back.append(parrafo)        
    }
    if(patronus !== null){
        const parrafo = document.createElement("p"); 
        parrafo.textContent = "Patronus: " + patronus
        parrafo.className = "info"
        back.append(parrafo)
    }   
    if(house !== null){
        const parrafo = document.createElement("p"); 
        parrafo.textContent = "House: " + house
        parrafo.className = "info"
        back.append(parrafo)
    }
    if(books_featured_in !== null){
        const parrafo = document.createElement("p"); 
        parrafo.textContent = "Books Featured In: " + books_featured_in
        parrafo.className = "info"
        back.append(parrafo)
    }

    const addArticle = document.getElementById("section");
    const card = document.createElement("div")
    card.className = "card"
    card.append(front, back)
    addArticle.insertAdjacentElement("beforeend", card); 
});