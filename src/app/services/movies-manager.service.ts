import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

const NODO_RAIZ = "peliculas";

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  static deletePelicula(peliculaParaBorrar: Movie | undefined) {
    throw new Error('Method not implemented.');
  }
  private peliculas: Movie[] = [];
  constructor(private storage: Storage) {
    //this.rellenarArray();
    this.init(); //metodo asíncrono.
  }

  //Inicializacion de datos almacenados en la bbdd local.
  async init() {
    this.storage = await this.storage.create().finally(() => {
      this.rellenarArray();
    });
  }

  //Obtener todas las peliculas.
  public getPeliculas(): Movie[] {
    return this.peliculas;
  }

  /*public addPelicula(pelicula: Movie) {
    this.peliculas.push(pelicula);
  }*/

  //Carga las películas almacenadas en la bbdd en el array local.
  rellenarArray() {
    //let p1: Movie = {
      /*titulo: "Peli1",
      generos: "Genero1",
      anyo: 2023,
      poster: "poster1",
      sinopsis: "sinopsis1",
      fav: true*/
      /*Title: "Peli1",
      Year: 2023,
      Type: "Genero1",
      Poster: "poster1",
      imdbID: "1000",
      fav: true
    }
    let p2: Movie = {*/
      /*titulo: "Peli2",
      generos: "Genero2",
      anyo: 2023,
      poster: "poster2",
      sinopsis: "sinopsis2",
      fav: true*/
      /*Title: "Peli2",
      Year: 2023,
      Type: "Genero2",
      Poster: "poster2",
      imdbID: "2000",
      fav: true
    }
    this.peliculas.push(p1);
    this.peliculas.push(p2);*/
    this.storage.get(NODO_RAIZ).
      then((peliculasDB) => {
        console.log(peliculasDB.length);
        if (peliculasDB != null) {
          //let peliculas = new Array(); --> Del pdf, en este caso ya existe array inicial.
          //this.peliculas = data;
          console.log("Tipo:" + typeof peliculasDB);
          peliculasDB.forEach((element: Movie) => {
            this.peliculas.push(element);
          });
        }
      })
  }

  //Método público para agregar una película al servicio.
  public addPelicula(pelicula: Movie) {
    if (this.peliculas.find(p => p.imdbID === pelicula.imdbID) != undefined) {
      throw new Error("La película ya existe.");
    } else {
      this.peliculas.push(pelicula); //Añadimos la película al array.
      this.guardarPelicula(); //Añadimos la película a la bbdd local.
    }
  }

public deletePelicula(pelicula: Movie | undefined) {
  if (pelicula != undefined) {
    let posicionPeliculaBuscada = this.peliculas.indexOf(pelicula);
    this.peliculas.splice(posicionPeliculaBuscada, 1);
    this.guardarPelicula();
  }
}

  //Método provado para agregar la película a la bbdd local. Antes era privado, ahora se ha cambiado a publico para que pueda usarse en Fav.
  public guardarPelicula() {
    this.storage.get(NODO_RAIZ).
      then(() => { //Se borra data
        /*if (data == null) {
          //let peliculas = new Array(); --> Del pdf, en este caso ya existe array inicial.
          this.peliculas.push(pelicula);
          this.storage.set(NODO_RAIZ, this.peliculas); //Se han añadido los this en peliculas.
        } else {
          this.peliculas = data; //en vez de let peliculas se pone this.peliculas.
          this.peliculas.push(pelicula);
          this.storage.set(NODO_RAIZ, this.peliculas);
        }*/
       this.storage.set(NODO_RAIZ, this.peliculas);
      }).
      catch((error) => {
        console.error("Error:" + error);
      }).
      finally(() => {
        console.log("Fin del proceso de almacenamiento");
      });
  }
}
