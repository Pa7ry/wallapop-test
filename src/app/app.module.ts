import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowcaseModule } from './core/page/showcase/showcase.module';
import { LayoutModule } from './core/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, ShowcaseModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
