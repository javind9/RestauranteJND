import { Component, OnInit } from '@angular/core';

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

  



  constructor(private _productosService:ProductosService) { }

  ngOnInit() {
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

  anadirPlato(producto: ProductoModel){

    this._productosService.crearProducto(producto).subscribe( resp =>  {
      
    });
  }

  anadirBebida(producto: ProductoModel){
    this._productosService.crearProducto(producto).subscribe( resp =>  {
      
    });
  }

  anadirPostre(producto: ProductoModel){
    this._productosService.crearProducto(producto).subscribe( resp =>  {
      
    });
  }
}
