export const filterProperties = (personajes, property, selectedOption) => {
  const propertyFiltered = personajes.filter(personaje => {
    return personaje[property] === selectedOption
  });
  return propertyFiltered
}
export const filterBooks = (personajes, selectedOption) => {
  const propertyFiltered = personajes.filter(personaje => {
    return personaje.books_featured_in.includes(selectedOption)
  });
  return propertyFiltered
}
export const sortCharacters = (personajes) => {
  const copyPersonajes = personajes
  const charactersorted = copyPersonajes.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
  })
   return charactersorted
}
export const searchFilter = (personajes, inputValue) => {
  const filterSearch = personajes.filter(personaje => {
    return personaje.name.toLowerCase().includes(inputValue)
  });
  return filterSearch
}