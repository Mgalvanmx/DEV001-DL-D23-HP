import { example, anotherExample } from '../src/data.js';
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

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
