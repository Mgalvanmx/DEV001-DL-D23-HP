import { filterProperties, filterBooks, sortCharacters, searchFilter } from '../src/data.js';
const characters = [
  {
    "name": "Harry Potter",
    "gender": "Male",
    "house": "Gryffindor",
    "rol": "Main",
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "name": "Hermione Granger",
    "gender": "Female",
    "house": "Gryffindor",
    "rol": "Main",
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "name": "Luna Lovegood",
    "gender": "Female",
    "house": "Ravenclaw",
    "rol": "Supporting",
    "books_featured_in": [4, 5, 6, 7]
  },
  {
    "name": "Roger Davies",
    "gender": "Male",
    "house": "Ravenclaw",
    "books_featured_in": [3, 4, 5, 7]
  },
  {
    "name": "Cedric Diggory",
    "gender": "Male",
    "house": "Hufflepuff",
    "books_featured_in": [3, 4, 5, 6, 7]
  },
  {
    "name": "Nymphadora Tonks",
    "gender": "Female",
    "house": "Hufflepuff",
    "rol": "Supporting",
    "books_featured_in": [5, 6, 7]
  },
  {
    "name": "Draco Malfoy",
    "gender": "Male",
    "house": "Slytherin",
    "rol": "Main",
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "name": "Bellatrix Lestrange",
    "gender": "Female",
    "house": "Slytherin",
    "rol": "Supporting",
    "books_featured_in": [4, 5, 6, 7]
  }
]

describe('filterProperties test', () => {
  it('filterProperties is a function', () => {
    expect(typeof filterProperties).toBe('function');
  });

  it("filtra por el genero de cada personaje", () => {
    const resultGender = [
      {
        "name": "Hermione Granger",
        "gender": "Female",
        "house": "Gryffindor",
        "rol": "Main",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Luna Lovegood",
        "gender": "Female",
        "house": "Ravenclaw",
        "rol": "Supporting",
        "books_featured_in": [4, 5, 6, 7]
      },
      {
        "name": "Nymphadora Tonks",
        "gender": "Female",
        "house": "Hufflepuff",
        "rol": "Supporting",
        "books_featured_in": [5, 6, 7]
      },
      {
        "name": "Bellatrix Lestrange",
        "gender": "Female",
        "house": "Slytherin",
        "rol": "Supporting",
        "books_featured_in": [4, 5, 6, 7]
      } 
    ]
    const filter = filterProperties(characters, "gender", "Female")
    expect(filter).toEqual(resultGender)
  })
});


describe('filterBooks test', () => {
  it('filterBooks is a function', () => {
    expect(typeof filterBooks).toBe('function');
  });

  it("filtra los libros incluidos en cada personaje", () => {
    const resultBooks = [
      {
        "name": "Harry Potter",
        "gender": "Male",
        "house": "Gryffindor",
        "rol": "Main",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Hermione Granger",
        "gender": "Female",
        "house": "Gryffindor",
        "rol": "Main",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Draco Malfoy",
        "gender": "Male",
        "house": "Slytherin",
        "rol": "Main",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      }
    ]
    const filter = filterBooks(characters, 1)
    expect(filter).toEqual(resultBooks)
  });
});


describe('sortCharacters test', () => {
  it('sortCharacters is a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it("ordena de a-z", () => {
    const resultSort = [
      {
        "name": "Bellatrix Lestrange",
        "gender": "Female",
        "house": "Slytherin",
        "rol": "Supporting",
        "books_featured_in": [4, 5, 6, 7]
      },
      {
        "name": "Cedric Diggory",
        "gender": "Male",
        "house": "Hufflepuff",
        "books_featured_in": [3, 4, 5, 6, 7]
      },
      {
        "name": "Draco Malfoy",
        "gender": "Male",
        "house": "Slytherin",
        "rol": "Main",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Harry Potter",
        "gender": "Male",
        "house": "Gryffindor",
        "rol": "Main",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Hermione Granger",
        "gender": "Female",
        "house": "Gryffindor",
        "rol": "Main",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Luna Lovegood",
        "gender": "Female",
        "house": "Ravenclaw",
        "rol": "Supporting",
        "books_featured_in": [4, 5, 6, 7]
      },
      {
        "name": "Nymphadora Tonks",
        "gender": "Female",
        "house": "Hufflepuff",
        "rol": "Supporting",
        "books_featured_in": [5, 6, 7]
      },
      {
        "name": "Roger Davies",
        "gender": "Male",
        "house": "Ravenclaw",
        "books_featured_in": [3, 4, 5, 7]
      }      
    ]
    const sort = sortCharacters(characters)
    expect(sort).toEqual(resultSort)
  })
});


describe('searchFilter test', () => {
  it('searchFilter is a function', () => {
    expect(typeof searchFilter).toBe('function');
  });
   
  it("buscar por nombre", () => {
    const resultSearch = [
      {
        "name": "Bellatrix Lestrange",
        "gender": "Female",
        "house": "Slytherin",
        "rol": "Supporting",
        "books_featured_in": [4, 5, 6, 7]
      },
      {
        "name": "Draco Malfoy",
        "gender": "Male",
        "house": "Slytherin",
        "rol": "Main",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Luna Lovegood",
        "gender": "Female",
        "house": "Ravenclaw",
        "rol": "Supporting",
        "books_featured_in": [4, 5, 6, 7]
      }
      
    ]
    const search = searchFilter(characters, "l")
    expect(search).toEqual(resultSearch)
  })
});