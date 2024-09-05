import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { environment } from 'src/environments/environment';

const BASE_URL = 'https://www.omdbapi.com';
const API_KEY = environment.OMDB_API_KEY;

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private http = inject(HttpClient);
  private movies: any[] = [];
  constructor() { }
  getMovie(title: string): Observable<any> {
    return this.http
      .get<any>(`${BASE_URL}?apikey=${API_KEY}&s=${title}`)
      .pipe(
        delay(1000) //Simulación de retardo
      );
  }
}
