import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/core/models/items.interface';

@Component({
  selector: 'app-fav-item',
  templateUrl: './fav-item.component.html',
  styleUrls: ['./fav-item.component.scss'],
})
export class FavItemComponent {
  @Input() item!: Item;

  @Output() deleteFav = new EventEmitter();

  supr() {
    this.deleteFav.emit();
  }
}
