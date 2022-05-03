export interface SpeciesResponse {
    names: {
        language: {
            name: string
        }
        name: string
    }[],
    flavor_text_entries:{
        flavor_text: string
        language: {
            name: string
        }
        version: {
            name: string
        }
    }[]
}