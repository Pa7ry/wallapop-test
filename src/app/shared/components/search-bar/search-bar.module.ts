import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchBarComponent } from './search-bar.component';

// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatInputModule, ReactiveFormsModule, MatSelectModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
