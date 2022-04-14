import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSearchbarComponent } from './fav-searchbar.component';

describe('FavSearchbarComponent', () => {
  let component: FavSearchbarComponent;
  let fixture: ComponentFixture<FavSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavSearchbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
