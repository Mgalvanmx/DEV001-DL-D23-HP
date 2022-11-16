export const filterGender = (personajes, selectedOption) => {
  const genderFiltered = personajes.filter(personaje => {
    return personaje.gender === selectedOption
  });
  return genderFiltered
}
export const filterRol = (personajes, selectedOption) => {
  const rolFiltered = personajes.filter(personaje => {
    return personaje.rol === selectedOption
  });
  return rolFiltered
}
export const filterHouse = (personajes, selectedOption) => {
  const houseFiltered = personajes.filter(personaje => {
    return personaje.house === selectedOption
  });
  return houseFiltered
}
export const filterBooks = (personajes, selectedOption) => {
  const booksFiltered = personajes.filter(personaje => {
     return personaje.books_featured_in.includes(selectedOption)
    })
    return booksFiltered
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



