import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExponentiationComponent } from './exponentiation/exponentiation.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentiationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
