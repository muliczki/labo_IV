import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  // @Input() busqueda!:string;
  @Input() listado: Pelicula[]=[];
  // buscar!:string;
  @Output() peliculaElegida: EventEmitter<any> = new EventEmitter<any>();

  // listadoPeliculas?:[];

  constructor(private miServicio:ConsumirApiService) { }

  ngOnInit(): void {
  }

 
  mostrarDetalle(peli: Pelicula){
    this.peliculaElegida.emit(peli);
  }


}
