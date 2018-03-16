import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductosComponent } from './supermercado/productos/productos.component';
import { ProductosService } from './providers/productos.service';



@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [
    HttpClientModule,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
