import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/core/models/items.interface';
import { FavoriteService } from 'src/app/core/service/favorite/favorite.service';

@Component({
  selector: 'app-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.scss'],
})
export class ShowcaseItemComponent {
  @Input() item!: Item;

  @Output() addFav = new EventEmitter();

  fav(item: Item) {
    this.addFav.emit(item);
  }
}
