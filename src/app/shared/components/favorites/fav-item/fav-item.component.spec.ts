import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavItemComponent } from './fav-item.component';

describe('FavItemComponent', () => {
  let component: FavItemComponent;
  let fixture: ComponentFixture<FavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete event', () => {
    spyOn(component.deleteFav, 'emit');
    component.supr();
    expect(component.deleteFav.emit).toHaveBeenCalled();
  });
});
