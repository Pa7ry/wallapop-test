import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShowcaseComponent } from './showcase.component';

// Components
import { ShowcaseItemComponent } from './components/showcase-item/showcase-item.component';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ShowcaseComponent, ShowcaseItemComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, HttpClientModule],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
