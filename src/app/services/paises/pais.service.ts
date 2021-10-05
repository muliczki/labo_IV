import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/classes/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private paisesRef: AngularFirestoreCollection

  constructor(private db: AngularFirestore) {
    this.paisesRef = this.db.collection('paises');
  }

  // public crearActor(actor:Actor){
  //   return this.actoresRef.add({...actor});
  // }

  public obtenerPaises(){
    return this.paisesRef.valueChanges() as Observable<Pais[]>;
  }
}
