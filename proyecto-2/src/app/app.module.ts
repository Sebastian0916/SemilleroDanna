import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularModule } from '@sinco/angular';
import { ComponentesModule } from './componentes/componentes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularModule,
    ComponentesModule,
    MatSlideToggle,
  ],
  exports: [
    AngularModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSlideToggle,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
