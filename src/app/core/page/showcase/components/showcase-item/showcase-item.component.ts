import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/core/models/items.interface';

@Component({
  selector: 'app-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.scss'],
})
export class ShowcaseItemComponent implements OnInit {
  @Input() item!: Item;

  constructor() {}

  ngOnInit(): void {}
}
