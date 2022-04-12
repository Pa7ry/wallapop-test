import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [CommonModule],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
