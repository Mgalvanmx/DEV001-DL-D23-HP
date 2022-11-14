/*estas funciones son de ejemplo

export const example = () => {
    return 'example';
  };
  
  export const anotherExample = () => {
    return 'OMG';
  };

export const filterByGender = (personaje,selectedOption) => {
const arrGender = personaje.filter(personaje => personaje.gender == selectedOption.value);
return arrGender
    
 console.log(filterByGender);
    
};*/
//Fitrar por genero
export let filterGender = (personaje, selectedOption) =>{
    const genderFiltered = personaje.filter (personaje => {
      return personaje.gender === selectedOption
    });
    return genderFiltered
  }

//Filtrar por Characters
export let filterCharacters = (personaje, selectedOption) =>{
    const CharactersFiltered = personaje.filter (personaje => {
      return personaje.characters === selectedOption
    });
    return charactersFiltered
  }

//Filtrar por House
export let filterHouse = (personaje, selectedOption) =>{
    const houseFiltered = personaje.filter (personaje => {
      return personaje.house === selectedOption
    });
    return houseFiltered
  }

  //Filtrar por Specie
export let filterSpecie = (personaje, selectedOption) =>{
    const specieFiltered = personaje.filter (personaje => {
      return personaje.species === selectedOption
    });
    return specieFiltered
  }

  //Filtrar por Books
export let filterBooks = (personaje, selectedOption) =>{
    const booksFiltered = personaje.filter (personaje => {
      return personaje.books_featured_in === selectedOption
    });
    return booksFiltered
  }
