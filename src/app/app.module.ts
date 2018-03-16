import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductosComponent } from './supermercado/productos/productos.component';
import { ProductosService } from './providers/productos.service';
import { RoundPipe } from './pipe/rounds';
import { FilterProductosPipe } from './pipe/filter.pipe.producto';



@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    ProductosComponent,
    RoundPipe,
    FilterProductosPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
