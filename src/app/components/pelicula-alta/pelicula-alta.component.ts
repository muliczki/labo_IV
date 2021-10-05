import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/classes/actor';
import { Pelicula } from 'src/app/classes/pelicula';
import { PeliculaService } from 'src/app/services/peliculas/pelicula.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  @Output() submitFormulario = new EventEmitter();

  formulario:FormGroup

  public pelicula = new Pelicula();
  public actorNombreApellido?:string;

  constructor(private peliculaService: PeliculaService, private fb:FormBuilder) { 
    this.formulario = fb.group({
      nombre: ["", Validators.required],
      tipo: ["", Validators.required],
      fecha_estreno: ["", Validators.required],
      foto: ["", Validators.required],
      cantidad_publico: ["", Validators.required],
      protagonista: ["", Validators.required]
      
    })
  }

  ngOnInit(): void {
  }

  public agregarPelicula() {
    // this.submitFormulario.emit(this.actor);
    this.pelicula.id = this.randomInteger(1,1000000);
    this.peliculaService.crearPelicula(this.pelicula);
    // .then(
    this.pelicula = new Pelicula();
  }

  public setActor(actor:Actor){
    
    this.actorNombreApellido = actor.nombre+ " "+ actor.apellido;
    // console.log(pais.nombre);
    this.pelicula.id_protagonista = actor.id;
  }

    randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  

  

}
