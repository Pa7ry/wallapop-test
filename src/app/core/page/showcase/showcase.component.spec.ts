import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsService } from '../../service/items/items.service';

import { ShowcaseComponent } from './showcase.component';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let itemsService: ItemsService;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseComponent],
      imports: [HttpClientModule],
      providers: [ItemsService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    itemsService = TestBed.inject(ItemsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get items', () => {
    const itemsServiceSpy = spyOn(itemsService, 'getItems').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(itemsService.getItems).toHaveBeenCalled();
    expect(itemsServiceSpy).toHaveBeenCalled();
    expect(itemsServiceSpy.calls.any()).toBeTrue();
  });
});
