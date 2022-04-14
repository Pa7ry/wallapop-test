import { Component, OnInit } from '@angular/core';
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
    this.favoriteSvc.favoriteItems$.subscribe((favItems: Item[]) => (this.favItems = favItems));
    console.log(this.favItems);
  }

  deleteFav(itemIndex: number) {
    this.favItems.splice(itemIndex, 1);
    this.favoriteSvc.updateFavoriteItems(this.favItems);
  }
}
