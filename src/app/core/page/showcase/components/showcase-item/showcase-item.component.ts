import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/core/models/items.interface';

@Component({
  selector: 'app-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.scss'],
})
export class ShowcaseItemComponent {
  @Input() item!: Item;

  @Output() addFav = new EventEmitter();

  fav() {
    this.addFav.emit(this.item);
  }
}
