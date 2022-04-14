import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../../models/items.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private _favoriteItems: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  get favoriteItems$(): Observable<Item[]> {
    return this._favoriteItems.asObservable();
  }

  updateFavoriteItems(items: Item[]) {
    this._favoriteItems.next(items);
  }
}
