import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
