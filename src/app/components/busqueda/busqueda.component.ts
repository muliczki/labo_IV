import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Pelicula } from 'src/app/pelicula';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  peliSeleccionada: Pelicula = new Pelicula();
  busquedaPelicula:string = 'harry potter';
  estado = false;

  listadoPeliculas: Pelicula[]=[];
 

  constructor(private miServicio:ConsumirApiService, private spinner: NgxSpinnerService) {
    // console.log(this.busqueda);
    // let buscar = this.busqueda
    this.actualizarListado();
  }

  randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  


  ngOnInit(): void {
  }


  
  mostrarPelieleccionada(peli:Pelicula){
    this.peliSeleccionada = peli;
    this.estado = true;
  }

  actualizarBusqueda(nuevaBusqueda:string){
    console.log(nuevaBusqueda);
    this.busquedaPelicula = nuevaBusqueda;
    console.log(this.busquedaPelicula);
    this.actualizarListado();
  }

  actualizarListado() {
    // console.log(this.busqueda);
    // let buscar = this.busqueda
    this.spinner.show();
    setTimeout(()=>{
      //lista no null
      this.spinner.hide();
    }, 2000);

    this.listadoPeliculas=[];
    this.miServicio.ObtenerPeliculas(this.busquedaPelicula, "movie").subscribe((peliculas:any)=>{
      // this.listadoPeliculas = peliculas['Search'][0]['poster'];
     
      console.log(peliculas);
      for (let index = 0; index < peliculas['Search'].length; index++) {
        
        let pelicula = new Pelicula();
        pelicula.id = peliculas['Search'][index]['imdbID'];
        pelicula.nombre = peliculas['Search'][index]['Title'];
        pelicula.fecha_estreno = peliculas['Search'][index]['Year'];
        pelicula.tipo = peliculas['Search'][index]['Type'];
        pelicula.foto = peliculas['Search'][index]['Poster'];
        pelicula.cantidad_publico = this.randomInteger(1000000,100000000);
        
        // console.log(pelicula);
        if(pelicula.foto!="N/A"){
          this.listadoPeliculas.push(pelicula);

        }
      }
      console.log(this.listadoPeliculas);

      this.listadoPeliculas.sort(function (a, b) {
        // A va primero que B
        if (a.fecha_estreno! < b.fecha_estreno!)
            return 1;
        // B va primero que A
        else if (a.fecha_estreno! > b.fecha_estreno!)
            return -1;
        // A y B son iguales
        else 
            return 0;
    });
    });
  }

}
