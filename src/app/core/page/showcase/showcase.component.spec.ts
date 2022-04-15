import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { ItemsService } from '../../service/items/items.service';
import { OrderByComponent } from './components/order-by/order-by.component';
import { ShowcaseItemComponent } from './components/showcase-item/showcase-item.component';

import { ShowcaseComponent } from './showcase.component';
import { Item } from '../../models/items.interface';
import { FavoriteService } from '../../service/favorite/favorite.service';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let itemsService: ItemsService;
  let favoriteService: FavoriteService;
  let fixture: ComponentFixture<ShowcaseComponent>;

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

  const mockOrderedList = [
    {
      title: 'Vespa restaurada',
      description:
        'Está restaurada y muy cuidada, con piezas originales y repintada una vez de color rojo carmín. Solo acepto ofertas serias',
      price: '1990',
      email: 'vespa@wallapop.com',
      image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/vespa.png',
    },
    {
      title: 'TV de 43 pulgadas',
      description: 'Televisor de 43 pulgadas. Funciona perfectamente. No tengo la base. Precio negociable',
      price: '400',
      email: 'tv@wallapop.com',
      image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/tv.png',
    },
    {
      title: 'Tocadiscos vintage',
      description: 'Muy bien cuidado! Regalo los discos de LP que se ve en las fotos',
      price: '325',
      email: 'turntable@wallapop.com',
      image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/turntable.png',
    },
    {
      title: 'Sofa de piel auténtica',
      description: 'Vendo sofá de piel negro. Tiene signos evidentes de uso, de ahí el precio. Es muy cómodo y bonito',
      price: '75',
      email: 'sofa@wallapop.com',
      image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/sofa.png',
    },
    {
      title: 'Reloj de Daniel Wellington',
      description:
        'Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ',
      price: '100',
      email: 'watchmail@wallapop.com',
      image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/watch.png',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseComponent, MatPaginator, OrderByComponent, ShowcaseItemComponent],
      imports: [
        HttpClientModule,
        MatPaginatorModule,
        SearchBarModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ItemsService, FavoriteService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    itemsService = TestBed.inject(ItemsService);
    favoriteService = TestBed.inject(FavoriteService);
    fixture.autoDetectChanges();
  });
  it('should get items', () => {
    const itemsServiceSpy = spyOn(itemsService, 'getItems').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(itemsService.getItems).toHaveBeenCalled();
    expect(itemsServiceSpy).toHaveBeenCalled();
    expect(itemsServiceSpy.calls.any()).toBeTrue();
  });

  it('should show items with given value', async () => {
    await fixture.whenStable();
    component.search({ searchType: 'title', searchValue: 'barbacoa' });
    expect(component.filteredItems).toEqual([mockItemList[0]]);
    expect(component.listLength).toBe(1);
  });

  it('should order items according given filter', async () => {
    await fixture.whenStable();
    component.order('title');
    expect(component.filteredItems).toEqual(mockOrderedList);
  });

  it('should add item to favs', async () => {
    component.addFav(mockItemList[0]);
    favoriteService.favoriteItems$.subscribe((items: Item[]) => {
      expect(items).toEqual([mockItemList[0]]);
    });
  });
});
