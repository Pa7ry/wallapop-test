import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LayoutComponent } from './layout.component';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
