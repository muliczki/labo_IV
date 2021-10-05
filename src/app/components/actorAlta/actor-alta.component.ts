import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/classes/actor';
import { Pais } from 'src/app/classes/pais';
import { ActorService } from 'src/app/services/actores/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  @Output() submitFormulario = new EventEmitter();

  formulario:FormGroup

  public actor = new Actor();
  constructor(private actorService: ActorService, private fb:FormBuilder) { 
    this.formulario = fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      fecha_nacimiento: ["", Validators.required],
      foto: ["", Validators.required],
      pais: ["", Validators.required],
      
    })
  }

  ngOnInit(): void {
  }

  public agregarActor() {
    // this.submitFormulario.emit(this.actor);
    this.actor.id = this.randomInteger(1,1000000);
    this.actorService.crearActor(this.actor);
    // .then(
    this.actor = new Actor();
  }

  public setPaisActor(pais:Pais){
    // console.log(pais.nombre);
    this.actor.pais = pais.nombre;
  }

    randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  

}
