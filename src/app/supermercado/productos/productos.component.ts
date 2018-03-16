import { Component, OnInit, Input } from '@angular/core';
import { Supermercado } from '../../model/supermercado';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  
  
  
  constructor() { 
    console.log('ProductosComponent constructor');
   // console.log('Detalle del producto: %o', this.producto);
  }

  ngOnInit() {
  }

}
