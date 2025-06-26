export type Character = {
  id: number,
  name: string,
  status: string,
  image: string,
}

export type Characters = Character[]

type ApiResponse = {
  results: Characters
}

export const RickMortyServices = {
    async getAll(): Promise<Characters> {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data: ApiResponse = await response.json()
        return data.results
    }
}