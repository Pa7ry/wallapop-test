import { Component, OnInit } from '@angular/core';
import { Item, Items } from '../../models/items.interface';
import { ItemsService } from '../../service/items/items.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  itemsList!: Item[];

  constructor(private itemsSvc: ItemsService) {}

  ngOnInit(): void {
    this.itemsSvc.getItems().subscribe((items: Items) => (this.itemsList = items.items));
  }
}
