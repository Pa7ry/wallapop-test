import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FavoritesComponent } from './favorites.component';

// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  exports: [FavoritesComponent],
})
export class FavoritesModule {}
