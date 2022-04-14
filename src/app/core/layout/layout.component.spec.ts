import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FavoritesComponent } from 'src/app/shared/components/favorites/favorites.component';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let dialogSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    dialogSpy = spyOn(TestBed.inject(MatDialog), 'open');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open fav modal', () => {
    component.showFavorites();
    expect(dialogSpy).toHaveBeenCalledOnceWith(FavoritesComponent, { width: '80vw' });
  });
});
