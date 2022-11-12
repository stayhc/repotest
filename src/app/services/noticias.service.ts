import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }

  getObtenerNoticias()
  {
    return this.http.get<RespuestaToHeadLines>('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=77a071414ca045bb8781cc4051e7c3ce');
  }
}
