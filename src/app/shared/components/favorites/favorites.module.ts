import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FavoritesComponent } from './favorites.component';

// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FavItemComponent } from './fav-item/fav-item.component';
import { MatInputModule } from '@angular/material/input';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  declarations: [FavoritesComponent, FavItemComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule, SearchBarModule],
  exports: [FavoritesComponent],
})
export class FavoritesModule {}
