import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  platos: any[] = [];
  bebidas: any[] = [];
  postres: any[] = [];

  constructor(private _productosService:ProductosService, private _carritoService:CarritoService) { }

  ngOnInit() {
    this.platos = this._productosService.getPlatos();
    this.bebidas = this._productosService.getBebidas();
    this.postres = this._productosService.getPostres();

  }

  addCarrito(){
    this._carritoService.addProducto(this.producto);
  }

}
