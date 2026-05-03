import { Component, input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})

export class PlayingCardComponent {
  // @Input({
  //   alias: 'my-monster',
  //   required: false,
  //   transform: (value: Monster) => {
  //     value.hp = value.hp / 2; // Exemple transformation: halve the hp
  //     return value;
  //   }
  // })
   monster: InputSignal<Monster> = input(new Monster(), {
    alias: 'my-monster',
    
    transform: (value: Monster) => {
      value.hp = value.hp / 2; // Example transformation: halve the hp
      return value;
    }
   });

  // @Input() hp: number = this.monster.hp;
  // @Input() figureCaption: string = this.monster.figureCaption;
  // @Input() attackName: string = this.monster.attackName;
  // @Input() attackStrength: number = this.monster.attackStrength;
  // @Input() attackDescription: string = this.monster.attackDescription;
  // @Input() name: string = this.monster.name;


}
