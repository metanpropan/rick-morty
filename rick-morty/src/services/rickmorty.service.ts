type Characters = [{
  id: number
}]

export const RickMortyServices = {
    async getAll(): Promise<Characters> {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data: Characters = await response.json()
        return data.results
    }
}
