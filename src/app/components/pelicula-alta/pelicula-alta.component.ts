import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private peliculaService: PeliculaService, private fb:FormBuilder) { 
    this.formulario = fb.group({
      nombre: ["", Validators.required],
      tipo: ["", Validators.required],
      fecha_estreno: ["", Validators.required],
      foto: ["", Validators.required],
      cantidad_publico: ["", Validators.required],
      
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

  // public setPaisActor(pais:Pais){
  //   // console.log(pais.nombre);
  //   this.actor.pais = pais.nombre;
  // }

    randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  


}
