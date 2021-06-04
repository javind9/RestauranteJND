import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { ProductoModel } from '../models/producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: ProductoModel[] = [];

  constructor(private _productosService:ProductosService) { }

  ngOnInit() {
    this._productosService.getCarrito().subscribe( resp =>{
      this.productos = resp;
    });
  }

}
