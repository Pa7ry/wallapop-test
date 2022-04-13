import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter();

  value: string = '';

  searchOptions: { name: string; value: string }[] = [
    {
      name: 'Título',
      value: 'title',
    },
    {
      name: 'Descripción',
      value: 'description',
    },
    {
      name: 'Precio',
      value: 'price',
    },
    {
      name: 'Email',
      value: 'email',
    },
  ];

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchType: [this.searchOptions[0].value],
      searchValue: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.search.emit(this.searchForm.getRawValue());
  }
}
