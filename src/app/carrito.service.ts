import { Injectable, RootRenderer } from '@angular/core';
import { find } from 'rxjs/operators';
import { FirestoreService } from './firestore.service';
import { Producto } from './productos.service';

@Injectable({
    providedIn: 'root'
})

export class CarritoService {
    private pedido: Pedido;
    path = 'carrito/';

    constructor(private _firestoreService: FirestoreService){

    }


    loadCarrito(){
        
    }



    addProducto(producto: Producto){

    }
}




export interface Pedido {
    id: string;
    productos: ProductoPedido[];
    precioTotal: number;
    estado: EstadoPedido;
    fecha: Date;
    valoracion: number;
}

interface ProductoPedido {
    producto: Producto;
    cantidad: number;
}


export type EstadoPedido = 'enviado' | 'visto' | 'camino' | 'entregado';