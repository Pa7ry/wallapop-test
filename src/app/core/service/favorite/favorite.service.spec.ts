import { TestBed } from '@angular/core/testing';
import { Item } from '../../models/items.interface';

import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;

  const mockItemList = [
    {
      title: 'Barbacoa',
      description:
        'Barbacoa en buen estado. La he usado pocas veces y está casi nueva. Ideal para fiestas y celebraciones',
      price: '120',
      email: 'barbecue@wallapop.com',
      image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png',
    },
    {
      title: 'Sofa de piel auténtica',
      description: 'Vendo sofá de piel negro. Tiene signos evidentes de uso, de ahí el precio. Es muy cómodo y bonito',
      price: '75',
      email: 'sofa@wallapop.com',
      image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/sofa.png',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update favorite items', () => {
    service.updateFavoriteItems(mockItemList);

    service.favoriteItems$.subscribe((items: Item[]) => expect(items).toEqual(mockItemList));
  });
});
