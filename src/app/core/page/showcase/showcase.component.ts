import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ItemFilter } from '../../models/item-filter.interface';
import { Item, Items } from '../../models/items.interface';
import { FavoriteService } from '../../service/favorite/favorite.service';
import { ItemsService } from '../../service/items/items.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  itemsList: Item[] = [];

  filteredItems: Item[] = [];

  orderSelected!: ItemFilter;

  listLength!: number;

  startItem: number = 0;

  endItem: number = 5;

  isFiltered: boolean = false;

  constructor(private itemsSvc: ItemsService, private favoriteSvc: FavoriteService) {}

  ngOnInit(): void {
    this.itemsSvc.getItems().subscribe((items: Items) => {
      this.itemsList = this.orderItems('title', items.items);
      this.listLength = this.itemsList.length;
      this.filteredItems = this.itemsList.slice(this.startItem, this.endItem);
      this.orderSelected = 'title';
    });
  }

  /**
   * search items according filter selected
   * @param ev - { searchType: ItemFilter; searchValue: string }
   */
  search(ev: { searchType: ItemFilter; searchValue: string }): void {
    this.paginator.firstPage();
    this.isFiltered = !!ev.searchValue;
    if (!ev.searchValue) {
      this.filteredItems = this.itemsList;
      this.listLength = this.itemsList.length;
    } else {
      this.filteredItems = [];
      this.itemsList.forEach((item: Item) => {
        if (item[ev.searchType].toLowerCase().includes(ev.searchValue.toLowerCase())) {
          this.filteredItems.push(item);
          this.listLength = this.filteredItems.length;
        }
      });
    }
  }

  /**
   * order and return an Item[] according ItemFilter selected, if an Item[] is not provided
   * order itemList by default
   * @param ev { ItemFilter }
   * @param itemArray { Item[] }
   * @returns Item[]
   */
  orderItems(ev: ItemFilter, itemArray: Item[] = this.itemsList): Item[] {
    if (ev === this.orderSelected) {
      return itemArray.reverse();
    } else {
      if (ev === 'price') {
        return itemArray.sort((itemA, itemB) => Number(itemA[ev]) - Number(itemB[ev]));
      } else {
        return itemArray.sort((itemA, itemB) => itemA[ev].localeCompare(itemB[ev]));
      }
    }
  }

  /**
   * order items according selection and navigates to first page
   * @param ev { ItemFilter }
   */
  order(ev: ItemFilter): void {
    this.filteredItems = this.isFiltered ? this.orderItems(ev, this.filteredItems) : this.orderItems(ev);
    this.orderSelected = ev;
    this.paginator.firstPage();
  }

  /**
   * add item to favorite list
   * @param item { Item }
   */
  addFav(item: Item): void {
    this.favoriteSvc.favoriteItems$
      .subscribe((favItems: Item[]) => {
        if (!favItems.includes(item)) {
          favItems.push(item);
          this.favoriteSvc.updateFavoriteItems(favItems);
        }
      })
      .unsubscribe();
  }

  /**
   * handles page event and changes the page
   * @param event { PageEvent }
   */
  handlePageEvent(event: PageEvent): void {
    if (event.previousPageIndex !== undefined) {
      if (event.previousPageIndex < event.pageIndex) {
        this.startItem += 5;
        this.endItem += 5;
      } else if (event.previousPageIndex - event.pageIndex !== 1) {
        this.startItem = 0;
        this.endItem = 5;
      } else {
        this.startItem -= 5;
        this.endItem -= 5;
      }
    }
    this.filteredItems = this.itemsList.slice(this.startItem, this.endItem);
    this.scrollTop();
  }

  /**
   * scroll to top of window
   */
  scrollTop() {
    window.scroll(0, 0);
  }
}
