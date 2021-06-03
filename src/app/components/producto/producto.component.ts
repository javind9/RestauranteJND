import { Component, Input, OnInit } from '@angular/core';
import {ProductosService } from 'src/app/productos.service';
import { ProductoModel } from '../models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  platos: ProductoModel[] = [];
  bebidas: ProductoModel[] = [];
  postres: ProductoModel[] = [];

  producto = new ProductoModel();

  // platos: any[] = [];
  // bebidas: any[] = [];
  // postres: any[] = [];

  constructor(private _productosService:ProductosService) { }

  ngOnInit() {
    //this.platos = this._productosService.getPlatos();
    //this.bebidas = this._productosService.getBebidas();
    //this.postres = this._productosService.getPostres();

    this._productosService.getPlatos().subscribe( resp =>{
      this.platos = resp;
    });
    
    this._productosService.getBebidas().subscribe( resp =>{
      this.bebidas = resp;
    });
    this._productosService.getPostres().subscribe( resp =>{
      this.postres = resp;
    });

  }

}
