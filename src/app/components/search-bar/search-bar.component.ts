import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() searchButtonClick = new EventEmitter();

  searchClick() {
    this.searchButtonClick.emit(); 
    console.log('Search button clicked');
    // Ajouter ici la logique de recherche si nécessaire
    // Par exemple, vous pouvez appeler un service de recherche ou filtrer une liste de monst
  }

}
