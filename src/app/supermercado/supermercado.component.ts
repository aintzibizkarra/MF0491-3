import { Component, OnInit } from '@angular/core';
import { Supermercado } from '../model/supermercado';
import { ProductosService } from '../providers/productos.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  
  productos : Supermercado[];
  
  constructor(public productosService : ProductosService) { 
    console.log('SupermercadoComponent constructor');

  }

  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit');
    this.productos = this.productosService.getProductos();
    //this.recetaSelec = this.recetas[0] || new Receta ('Anonimo');
  }

}
