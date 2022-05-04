export interface PokemonResponse {
    sprites: {
        front_default: string
    }
    weight: number
    height: number
    types: {
        slot: number
        type: {
            name: string
        }
    }[]
    abilities: {
        ability: {
            name: string
        }
    }[]
}