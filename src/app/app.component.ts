import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular Pokedex';

  scrollUp(){
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }
}
