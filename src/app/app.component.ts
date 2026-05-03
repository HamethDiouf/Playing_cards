import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: `./app.component.css`

})
export class AppComponent {

  monster1!: Monster;
  count: number = 0;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Dragon';
    this.monster1.hp = 100;
    this.monster1.figureCaption = 'N° 002 Dragon';
    this.monster1.attackName = 'Fire Breath';
    this.monster1.attackStrength = 30;
    this.monster1.attackDescription = 'Ceci est une attaque de feu qui brûle l\'adversaire avec une chaleur intense.';
    // this.monster1.imageUrl = 'https://www.pinterest.com/pin/377458012498120778/';
    // this.monster1.imageAlt = 'Image of a Dragon';
  }

  // La methode pour augmenter le compteur
  // Cette méthode sera appelée lorsque le bouton de recherche sera cliqué
  incrementeCount() {
    this.count  ++;
  }
}
