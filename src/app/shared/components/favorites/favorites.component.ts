import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Item } from 'src/app/core/models/items.interface';
import { FavoriteService } from 'src/app/core/service/favorite/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favItems: Item[] = [];

  constructor(private favoriteSvc: FavoriteService) {}

  ngOnInit(): void {
    this.favoriteSvc.favoriteItems$
      .pipe(take(1))
      .subscribe((favItems: Item[]) => (this.favItems = favItems))
      .unsubscribe();
  }

  deleteFav(itemIndex: number) {
    this.favItems.splice(itemIndex, 1);
    this.favoriteSvc.updateFavoriteItems(this.favItems);
  }
}
