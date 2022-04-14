import { ItemFilter } from 'src/app/core/models/item-filter.interface';

export const itemFilters: Array<{ name: string; value: ItemFilter }> = [
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
