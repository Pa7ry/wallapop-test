import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { ShowcaseComponent } from './showcase.component';
import { ShowcaseItemComponent } from './components/showcase-item/showcase-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OrderByComponent } from './components/order-by/order-by.component';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [ShowcaseComponent, ShowcaseItemComponent, SearchBarComponent, OrderByComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
