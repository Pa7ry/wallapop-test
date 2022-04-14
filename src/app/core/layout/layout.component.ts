import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesComponent } from 'src/app/shared/components/favorites/favorites.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private dialog: MatDialog) {}

  showFavorites() {
    this.dialog.open(FavoritesComponent, {
      width: '80vw',
    });
  }
}
