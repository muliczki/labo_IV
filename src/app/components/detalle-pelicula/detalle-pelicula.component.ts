import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaSeleccionada: Pelicula = new Pelicula();
  @Input() estado: Boolean = new Boolean();
  constructor() { }

  ngOnInit(): void {
  }

  limpiar()
  {
    this.estado = !this.estado;
  }

}
