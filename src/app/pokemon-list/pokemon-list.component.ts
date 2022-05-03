import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  idList: number[]= [1,2]

  // im Kostruktor wird der Service autowired (d.h. ich bekomme automatisch eine Instanz vom API-Service)
  constructor(private apiService: ApiService) { }

  // sobald die Komponente erzeugt wird, wird die Funktion ausgeführt
  ngOnInit(): void {
    
  }

}
