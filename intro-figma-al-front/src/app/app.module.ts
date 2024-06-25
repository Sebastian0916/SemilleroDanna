import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularModule } from '@sinco/angular';
import { CardComponent } from './card/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
