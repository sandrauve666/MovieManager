import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItemSliding, IonItemOption, IonItemOptions, IonList, IonItem, IonButtons, IonMenuButton, IonLabel, IonButton, IonProgressBar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonAlert, IonToast } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interfaces/movie';
import { PeliculasService } from 'src/app/services/httpomdb.service';
import { MoviesManagerService } from 'src/app/services/movies-manager.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonToast, IonAlert, IonCardTitle, IonCardHeader, IonCard, IonItemOptions, IonItemOption, IonItemSliding, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButtons, IonMenuButton, IonLabel, IonButton, IonProgressBar, IonCardSubtitle, IonCardContent, IonImg]
})
export class BusquedaPage implements OnInit {
  public tituloBuscado: string = "";
  public peliculas: Movie[] = [];
  public cargando: boolean = false;
  public noEncontrado: boolean = false; //Para el diálogo que avisa que no se ha encontrado  ninguna película.
  public mensaje: string = ""; //Para el toast.
  public guardado: boolean = false; //Para el toast.
  public alertButtons = ['Cerrar'];
  constructor(private peliculasService: PeliculasService,
    private moviesManager: MoviesManagerService
  ) { }

  ngOnInit() {
  }

  guardar(pelicula: Movie) {
    //this.moviesManager.addPelicula(pelicula);
    try {
      this.moviesManager.addPelicula(pelicula);
      //this.peliculas.splice(this.peliculas.indexOf(pelicula), 1); //Borra de la lista sólo si no no sé qué.
      this.mensaje = "Pelicula guardada";
      this.guardado = true;
    } catch {
      this.mensaje = "La película ya está en el repositorio";
      this.guardado = true;
    }
    this.peliculas.splice(this.peliculas.indexOf(pelicula), 1); //Borra de la lista SIEMPRE.
  }

  buscar() {
    this.cargando = true;
    console.log("Buscando...." + this.tituloBuscado);
    this.peliculasService.getMovies(this.tituloBuscado).subscribe(data => {
      this.cargando = false;
      if (data.Response === 'False') {//Response es específico de OMDB-API
        console.error("No he encontrado ninguna película");
      } else {
        console.log(data);
        this.peliculas = data.Search;
      }
    })
  }

  cerrarAlerta() {
    this.noEncontrado = false;
    this.tituloBuscado = "";
  }
  
  cerrarToast() {
    this.guardado = false;
  }

}


