import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/models/items.interface';
import { FavoriteService } from 'src/app/core/service/favorite/favorite.service';

@Component({
  selector: 'app-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.scss'],
})
export class ShowcaseItemComponent {
  @Input() item!: Item;

  constructor(private favoriteSvc: FavoriteService) {}

  setFav(item: Item) {
    this.favoriteSvc.favoriteItems$.subscribe((favItems: Item[]) => {
      if (!favItems.includes(item)) {
        favItems.push(item);
        this.favoriteSvc.updateFavoriteItems(favItems);
      }
    });
  }
}
