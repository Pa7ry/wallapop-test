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

  constructor() {}

  select(orderSelected: ItemFilter) {
    this.order.emit(orderSelected);
  }
}
