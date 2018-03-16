export class Supermercado{

    //Atributos

    nombre : string;
    precio : number;
    precioUnitario : string;
    foto : string;
    oferta : boolean;
    cantidad : number;

    constructor(){
        this. nombre = '';
        this.precio = 0;
        this.precioUnitario = '';
        this.foto = 'assets/img/productos_default.jpg';
        this.oferta = false;
        this.cantidad = 0;
    }
}