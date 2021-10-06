import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExponentiationComponent } from './exponentiation/exponentiation.component';
import {FormsModule} from "@angular/forms";
import { StudentlistComponent } from './studentlist/studentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentiationComponent,
    StudentlistComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
