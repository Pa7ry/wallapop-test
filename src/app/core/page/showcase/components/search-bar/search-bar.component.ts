import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemFilter } from 'src/app/core/models/item-filter.interface';
import { itemFilters } from 'src/app/shared/utils/item-filter';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() search = new EventEmitter();

  searchOptions = itemFilters;

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchType: [this.searchOptions[0].value],
      searchValue: [null],
    });
  }

  onSubmit() {
    this.search.emit(this.searchForm.getRawValue());
  }
}
