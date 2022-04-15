import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ShowcaseItemComponent } from './showcase-item.component';

describe('ShowcaseItemComponent', () => {
  let component: ShowcaseItemComponent;
  let fixture: ComponentFixture<ShowcaseItemComponent>;

  const mockItem = {
    title: 'Barbacoa',
    description:
      'Barbacoa en buen estado. La he usado pocas veces y está casi nueva. Ideal para fiestas y celebraciones',
    price: '120',
    email: 'barbecue@wallapop.com',
    image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcaseItemComponent],
      imports: [MatCardModule, MatButtonModule, MatIconModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('inputproperty is blahBlah', () => {
    beforeEach(() => {
      component.item = mockItem;
      fixture.detectChanges();
    });

    it('should emit addFav event', () => {
      spyOn(component.addFav, 'emit');
      component.fav();
      expect(component.addFav.emit).toHaveBeenCalledWith(component.item);
    });
  });
});
