import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../../classes/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculasRef: AngularFirestoreCollection

  constructor(private db: AngularFirestore) {
    this.peliculasRef = this.db.collection('peliculas');
  }

  public crearPelicula(pelicula:Pelicula){
    return this.peliculasRef.add({...pelicula});
  }

  public obtenerPeliculas(){
    return this.peliculasRef.valueChanges() as Observable<Pelicula[]>;
  }
}
