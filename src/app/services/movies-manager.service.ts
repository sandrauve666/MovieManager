import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  private peliculas: Movie[] = [];
  constructor() { 
    this.rellenarArray();
  }

public getPeliculas(): Movie[] {
  return this.peliculas;
}
rellenarArray() {
  let p1: Movie = {
    titulo: "Peli1",
    generos: "Genero1",
    anyo: 2023,
    poster: "poster1",
    sinopsis: "sinopsis1",
    fav: true
  }
  let p2: Movie = {
    titulo: "Peli2",
    generos: "Genero2",
    anyo: 2023,
    poster: "poster2",
    sinopsis: "sinopsis2",
    fav: true
  }
  this.peliculas.push(p1);
  this.peliculas.push(p2);
}
}
