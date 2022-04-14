import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesComponent } from 'src/app/shared/components/favorites/favorites.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  showFavorites() {
    this.dialog.open(FavoritesComponent, {
      width: '80vw',
    });
  }
}
