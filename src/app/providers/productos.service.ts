import { Injectable } from '@angular/core';
import { Supermercado } from '../model/supermercado';
import { MOCK_SUPERMERCADO } from './mocks.supermercado';


@Injectable()
export class ProductosService {

  producto: Supermercado[];

  constructor() {
    console.log('ProductosService constructor');
   }

  getProductos():Supermercado[]{

    console.log('ProductosService getAll');
    let productos:Supermercado[] = [];
    let producto;
    
    let jsonData = JSON.parse(MOCK_SUPERMERCADO.inventario);

    jsonData.forEach( el => {
        producto = new Supermercado();
        producto.nombre = el.nombre;
        producto.foto = el.foto;
        producto.precio = el.precio;
        producto.precioOfertado = el.precioOfertado;
        producto.precioUnitario = el.precioUnitario;
        producto.cantidad = el.cantidad;
        producto.oferta = el.oferta;

        productos.push(producto);

    });
    return productos;
  }
}
