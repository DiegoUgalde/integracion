import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './viajes.component.html',
  styles: []
})
export class ViajesComponent implements OnInit {

  contadorPasajes = 0;
  precioPasajesSantiago = 0;
  precioPasajeViña = 0;

  constructor() { }

  ngOnInit() {
  }



}
