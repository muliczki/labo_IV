import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() busquedaNueva: EventEmitter<any> = new EventEmitter<any>();
  busqueda!:String;
  constructor() { }


  ngOnInit(): void {
  }

  actualizarBusqueda(){
    console.log(this.busqueda);
    this.busquedaNueva.emit(this.busqueda);
  }

}
