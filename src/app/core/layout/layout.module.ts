import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LayoutComponent } from './layout.component';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { FavoritesModule } from 'src/app/shared/components/favorites/favorites.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, FavoritesModule, MatDialogModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
