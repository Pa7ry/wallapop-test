import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteService } from 'src/app/core/service/favorite/favorite.service';

import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let favoriteService: FavoriteService;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      providers: [FavoriteService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    favoriteService = TestBed.inject(FavoriteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get favorite items', async () => {
    favoriteService.updateFavoriteItems(mockItemList);
    fixture.detectChanges();
    await fixture.whenStable();
    component.ngOnInit();
    expect(component.filteredFavs).toEqual(mockItemList);
  });

  it('should delete item from favorites', async () => {
    favoriteService.updateFavoriteItems(mockItemList);
    fixture.detectChanges();
    await fixture.whenStable();
    component.ngOnInit();
    component.deleteFav(1);
    expect(component.favItems).toEqual([mockItemList[0]]);
  });

  it('should display filtered items', async () => {
    favoriteService.updateFavoriteItems(mockItemList);
    fixture.detectChanges();
    await fixture.whenStable();
    component.ngOnInit();
    component.search({ searchType: 'title', searchValue: 'barbacoa' });
    expect(component.filteredFavs).toEqual([mockItemList[0]]);
  });

  it('should display all fav items when theres not filter value', async () => {
    favoriteService.updateFavoriteItems(mockItemList);
    fixture.detectChanges();
    await fixture.whenStable();
    component.ngOnInit();
    component.search({ searchType: 'title', searchValue: '' });
    expect(component.filteredFavs).toEqual(mockItemList);
  });
});
