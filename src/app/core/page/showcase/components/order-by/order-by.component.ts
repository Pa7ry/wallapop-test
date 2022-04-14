import { Component, EventEmitter, Output } from '@angular/core';
import { ItemFilter } from 'src/app/core/models/item-filter.interface';
import { itemFilters } from 'src/app/shared/utils/item-filter';

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.scss'],
})
export class OrderByComponent {
  @Output() order = new EventEmitter();

  itemFilters = itemFilters;

  asc = true;

  selectedItem: number = 0;

  constructor() {}

  select(orderSelected: ItemFilter, index: number) {
    this.selectedItem === index ? (this.asc = !this.asc) : (this.asc = true);
    this.selectedItem = index;
    this.order.emit(orderSelected);
  }
}
