import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  productos:any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _productosService: ProductosService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.productos = this._productosService.buscarProducto( params['termino']);
    })
  }

}
