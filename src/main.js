import { filterProperties, filterBooks, sortCharacters, searchFilter } from './data.js';
import data from './data/harrypotter/data.js';

const btnReturnToTop = document.getElementById("btn-returnToTop")
const inputSearch = document.getElementById("buscar")
const selectOrder = document.getElementById("ordenar")
const select = document.getElementById("filtrar");
const addArticle = document.getElementById("section");
const personajes = data.characters;
let filterCharacters = data.characters;

function crearElementos(arreglo) {
    arreglo.forEach((personaje) => {
        let nombre = personaje.name;
        const front = document.createElement("article");
        front.className = "front";
        const parrafo = document.createElement("p")
        parrafo.className = "nombre"
        parrafo.textContent = nombre;
        front.append(parrafo);

        let genero = personaje.gender
        let especie = personaje.species;
        if ((especie === "Human") && (genero === "Male")) {
            const image2 = document.createElement("img");
            image2.src = "img/harry.png";
            image2.className = "imagen2";
            front.append(image2);
        }
        else if ((especie === "Human") && (genero === "Female")) {
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
        else {
            const image = document.createElement('img');
            image.src = 'img/fowks.png';
            image.className = "imagen";
            front.append(image);
        }

        const { birth, death, species, ancestry, gender, patronus, house, books_featured_in } = personaje
        const back = document.createElement("article");
        back.className = "back";

        if (birth !== null) {
            const parrafo = document.createElement("p");
            parrafo.textContent = "Birth: " + birth
            parrafo.className = "info"
            back.append(parrafo)
        }
        if (death !== null) {
            const parrafo = document.createElement("p");
            parrafo.textContent = "Death: " + death
            parrafo.className = "info"
            back.append(parrafo)
        }
        if (species !== null) {
            const parrafo = document.createElement("p");
            parrafo.textContent = "Species: " + species
            parrafo.className = "info"
            back.append(parrafo)
        }
        if (ancestry !== null) {
            const parrafo = document.createElement("p");
            parrafo.textContent = "Ancestry: " + ancestry
            parrafo.className = "info"
            back.append(parrafo)
        }
        if (gender !== null) {
            const parrafo = document.createElement("p");
            parrafo.textContent = "Gender: " + gender
            parrafo.className = "info"
            back.append(parrafo)
        }
        if (patronus !== null) {
            const parrafo = document.createElement("p");
            parrafo.textContent = "Patronus: " + patronus
            parrafo.className = "info"
            back.append(parrafo)
        }
        if (house !== null) {
            const parrafo = document.createElement("p");
            parrafo.textContent = "House: " + house
            parrafo.className = "info"
            back.append(parrafo)
        }
        if (books_featured_in !== null) {
            const parrafo = document.createElement("p");
            parrafo.textContent = "Books Featured In: " + books_featured_in
            parrafo.className = "info"
            back.append(parrafo)
        }

        const card = document.createElement("div")
        card.className = "card"
        card.append(front, back)
        addArticle.insertAdjacentElement("beforeend", card);
    });
}
crearElementos(personajes)

select.addEventListener("change", filtrado)
function filtrado() {
    let optionElement = select.options[select.selectedIndex];
    let selectedOption = select.options[select.selectedIndex].value;
    let selectedOptionBook = parseInt(select.options[select.selectedIndex].value);

    if (optionElement.dataset.group === "books") {
        addArticle.innerHTML = ""
        filterCharacters = filterBooks(personajes, selectedOptionBook)
        crearElementos(filterCharacters)
    }
    else {
        addArticle.innerHTML = ""
        filterCharacters = filterProperties(personajes, optionElement.dataset.group, selectedOption)
        crearElementos(filterCharacters)
    }

}

selectOrder.addEventListener("change", ordenar)
function ordenar() {
    let selectedOption = this.options[selectOrder.selectedIndex].value;
    if (selectedOption === "a-z") {
        addArticle.innerHTML = ""
        const ordenarAz = sortCharacters(filterCharacters)
        crearElementos(ordenarAz)
    }
    if (selectedOption === "z-a") {
        addArticle.innerHTML = ""
        const ordenarZa = sortCharacters(filterCharacters).reverse()
        crearElementos(ordenarZa)
    }
}

inputSearch.addEventListener("keyup", search)
function search(e) {
    const inputValue = e.target.value
    addArticle.innerHTML = ""
    const searchResult = searchFilter(personajes, inputValue)
    crearElementos(searchResult)
}

btnReturnToTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
});

window.onscroll = () => {
    add_btnReturnToTop()
}
const add_btnReturnToTop = () => {
    if (window.scrollY < 300) {
        btnReturnToTop.classList.remove("btn-returnToTop-on")
    } else {
        btnReturnToTop.classList.add("btn-returnToTop-on")
    }
}