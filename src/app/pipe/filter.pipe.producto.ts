import { Pipe, PipeTransform } from '@angular/core';

import { Supermercado } from '../model/supermercado';


@Pipe({
  name: 'filter'
})
export class FilterProductosPipe implements PipeTransform {
/**
 * Filtro para buscar en una coleccion de coches. No es CaseSensitive
 * @param stock : Coche[]
 * @param searchText : string con la marca o modelo del coche
 */
  transform(inventario: Supermercado[], searchText: string): Supermercado[] {

    if(!inventario) return [];
    if(!searchText) return inventario;
    searchText = searchText.toLowerCase();
    let nombreProducto = "";
    return inventario.filter( productoIt  => {
        nombreProducto = productoIt.nombre;
        nombreProducto = nombreProducto.toLowerCase();
        return nombreProducto.includes(searchText);
        
    });
   }

}