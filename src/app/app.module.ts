import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';



@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
