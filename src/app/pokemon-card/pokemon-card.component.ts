import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../pokemon';
import { PokemonSpecies } from '../pokemonSpecies';
import { getGermanType } from '../translators';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html'
})

export class PokemonCardComponent implements OnInit {

  @Input()
  id!: number
  pokemon?: Pokemon
  pokemonSpecies?: PokemonSpecies
  getGermanType = getGermanType

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPokemonSpecies(this.id).subscribe(result => this.pokemonSpecies = result)
    this.apiService.getPokemon(this.id).subscribe(result => this.pokemon = result)
  }

}
