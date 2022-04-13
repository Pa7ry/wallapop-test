import { Component, OnInit } from '@angular/core';
import { Item, Items } from '../../models/items.interface';
import { ItemsService } from '../../service/items/items.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  itemsList: Item[] = [];

  filteredItems: Item[] = [];

  constructor(private itemsSvc: ItemsService) {}

  ngOnInit(): void {
    this.itemsSvc.getItems().subscribe((items: Items) => {
      this.itemsList = items.items;
      this.filteredItems = items.items;
    });
  }

  search(ev: { searchType: 'description' | 'title' | 'price' | 'email'; searchValue: string }) {
    if (!ev.searchValue) {
      this.filteredItems = this.itemsList;
    } else {
      this.filteredItems = [];
      this.itemsList.forEach((item: Item) => {
        if (item[ev.searchType].toLowerCase().includes(ev.searchValue.toLowerCase())) {
          this.filteredItems.push(item);
        }
      });
    }
  }
}
