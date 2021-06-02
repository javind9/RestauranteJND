import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 37.384588;
  lng = -5.976149;

  constructor() { }

  ngOnInit() {
  }

}
