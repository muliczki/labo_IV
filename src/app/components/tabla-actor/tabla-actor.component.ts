import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { ActorService } from 'src/app/services/actores/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  public listaActores: Actor[] = [];
  constructor(private actorService: ActorService) { }
  public seleccionado?: Actor;
  @Output() actorElegido: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.obtenerActores();
  }

  public obtenerActores(){
    this.actorService.obtenerActores().subscribe(
      actores => this.listaActores = actores
    );
  }

  public seleccionarActor(data:any){
    this.seleccionado=data;
    // console.log(this.seleccionado);
    this.actorElegido.emit(this.seleccionado);
  }
}
