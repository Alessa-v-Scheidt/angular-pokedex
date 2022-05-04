import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {

  idList: number[]= [1,2,3,4,5,6,7,8,9]

  // im Kostruktor wird der Service autowired (d.h. ich bekomme automatisch eine Instanz vom API-Service)
  constructor(private apiService: ApiService) { }

  // sobald die Komponente erzeugt wird, wird die Funktion ausgeführt
  ngOnInit(): void {
    
  }

}
