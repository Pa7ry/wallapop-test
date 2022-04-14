import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ItemFilter } from 'src/app/core/models/item-filter.interface';
import { Item } from 'src/app/core/models/items.interface';
import { FavoriteService } from 'src/app/core/service/favorite/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favItems: Item[] = [];

  filteredFavs: Item[] = [];

  constructor(private favoriteSvc: FavoriteService) {}

  ngOnInit(): void {
    this.favoriteSvc.favoriteItems$
      .pipe(take(1))
      .subscribe((favItems: Item[]) => {
        this.favItems = favItems;
        this.filteredFavs = favItems;
      })
      .unsubscribe();
  }

  deleteFav(itemIndex: number) {
    this.favItems.splice(itemIndex, 1);
    this.favoriteSvc.updateFavoriteItems(this.favItems);
  }

  search(ev: { searchType: ItemFilter; searchValue: string }) {
    if (!ev.searchValue) {
      this.filteredFavs = this.favItems;
    } else {
      this.filteredFavs = [];
      this.favItems.forEach((item: Item) => {
        if (item['title'].toLowerCase().includes(ev.searchValue.toLowerCase())) {
          this.filteredFavs.push(item);
        }
      });
    }
  }
}
