import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { ShowcaseComponent } from './showcase.component';
import { ShowcaseItemComponent } from './components/showcase-item/showcase-item.component';
import { OrderByComponent } from './components/order-by/order-by.component';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ShowcaseComponent, ShowcaseItemComponent, OrderByComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatChipsModule,
    SearchBarModule,
    MatPaginatorModule,
  ],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
