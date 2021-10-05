import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/classes/pais';
import { PaisService } from 'src/app/services/paises/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public listaPaises: Pais[] = [];
  constructor(private paisService: PaisService) { }
  public seleccionado?: Pais;
  @Output() paisElegido: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.obtenerPaises();
  }

  public obtenerPaises(){
    this.paisService.obtenerPaises().subscribe(
      paises => this.listaPaises = paises
    );
  }

  public seleccionarPais(data:any){
    this.seleccionado=data;
    // console.log(this.seleccionado);
    this.paisElegido.emit(this.seleccionado);
  }
}
