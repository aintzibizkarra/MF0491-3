import { Component, OnInit, Input } from '@angular/core';
import { Supermercado } from '../model/supermercado';
import { ProductosService } from '../providers/productos.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  
  productos : Supermercado[];
  cantidadComprar:number;
  @Input('cantidad') cantidad : Supermercado;

  constructor(public productosService : ProductosService) { 
    console.log('SupermercadoComponent constructor');

  }

  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit');
    this.productos = this.productosService.getProductos();
    
  }

  sumarCantidad(){
   console.log("sumarCantidad");
   this.cantidad.cantidad ++;
  
    
  }

  restarCantidad(){
    console.log("restarCantidad");
 }

}
