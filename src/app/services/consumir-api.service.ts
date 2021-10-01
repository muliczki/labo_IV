import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumirApiService {

  apiKey: string = 'd178a7ef';
  url = 'http://www.omdbapi.com/';
  constructor(private http:HttpClient) { }

  public ObtenerPeliculas(name:string, type:string){
    return this.http.get(`${this.url}?apiKey=${this.apiKey}&s=${name}&type=${type}`);
  }
}
