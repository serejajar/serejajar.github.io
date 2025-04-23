// Обьект ответа с сервера
type peopleResponseType = {
  properties: {
    birth_year: string,
    eye_color: string,
    films: string[],
    gender: string,
    hair_color: string,
    height: number,
    homeworld: string,
    mass: number,
    name: string,
    skin_color: string,
    created: string,
    edited: string,
    species: string[],
    starships: string[],
    url: string,
    vehicles: string[]
  }
}

export type {
  peopleResponseType
}

