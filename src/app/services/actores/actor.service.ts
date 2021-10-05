import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/classes/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actoresRef: AngularFirestoreCollection

  constructor(private db: AngularFirestore) {
    this.actoresRef = this.db.collection('actores');
  }

  public crearActor(actor:Actor){
    return this.actoresRef.add({...actor});
  }

  public obtenerActores(){
    return this.actoresRef.valueChanges() as Observable<Actor[]>;
  }
}
