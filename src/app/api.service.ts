import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { map, Observable } from 'rxjs';
import { SpeciesResponse } from './ApiResponseTypes/species-response';
import { PokemonSpecies } from './pokemonSpecies';
import { PokemonResponse } from './ApiResponseTypes/pokemon-response';

// die Response ist das was uns der Server schickt
interface PokeApiResponse {
  results: Pokemon[]
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://pokeapi.co/api/v2/'

  // observable = Konzept, dass da etwas kommt
  // das was kommt muss ich dann mit .subscribe handhaben
  getPokemonInfo(): Observable<Pokemon[]> {
    return this.http.get<PokeApiResponse>(this.baseUrl + 'pokemon?limit=150')
      // pipe ist ein feature von observables
      // im Service können hiermit die Daten verändert werden
      .pipe(
        // aus den Daten wird nur das data.results übernommen
        // map nimmt die einzelnen Objekte aus der pipe, wendet darauf etwas an und packt sie zurück
        map(data => data.results)
      );
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<PokemonResponse>(this.baseUrl + 'pokemon/' + id)
      .pipe(
        map(data => {
          const sprites = data.sprites.front_default
          const types = this.getTypesGerman(data.types.map(entry => entry.type.name))
          const abilities = data.abilities.map(entry => entry.ability.name)
          const weight = data.weight * 0.1 
          const height = data.height / 10

          return {
            sprites: sprites,
            types: types,
            abilities: abilities,
            weight: weight,
            height: height,
          }
        })
      );
  }

  getPokemonSpecies(id: number): Observable<PokemonSpecies> {
    return this.http.get<SpeciesResponse>(this.baseUrl + 'pokemon-species/' + id)
      .pipe(
        map(data => {
          const name = data.names.find(entry => entry.language.name == 'de')?.name || ''
          const description = data.flavor_text_entries.find(entry => entry.language.name == 'de' && entry.version.name == 'x')?.flavor_text || ''
          const dexId = this.getNationalDexId(id)

          return {
            name: name,
            description: description,
            id: dexId,
          }
        })
      );
  }

  getNationalDexId(id: number): string{
    if (id > 99) {
      return '#' + id
    } else if (id > 9) {
      return '#0' + id
    } else {
      return '#00' + id
    }
  }

  getTypesGerman(types: string[]): string[]{
    if(types == ['poison','grass'] || ['grass','poison']){
      return ['Pflanze','Gift']
    }else{
      return []
    }
  }
}
