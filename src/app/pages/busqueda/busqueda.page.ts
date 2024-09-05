import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItemSliding, IonItemOption, IonItemOptions, IonList, IonItem, IonButtons, IonMenuButton, IonLabel, IonButton, IonProgressBar } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interfaces/movie';
import { PeliculasService } from 'src/app/services/httpomdb.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonItemOptions, IonItemOption, IonItemSliding, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButtons, IonMenuButton, IonLabel, IonButton, IonProgressBar]
})
export class BusquedaPage implements OnInit {
  public tituloBuscado: string = "";
  public peliculas: Movie[] = [];
  public cargando: boolean = false;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  buscar() {
    this.cargando = true;
    console.log("Buscando...." + this.tituloBuscado);
    this.peliculasService.getMovie(this.tituloBuscado).subscribe(data => {
      this.cargando = false;
      if (data.Response === 'False') {//Response es específico de OMDB-API
        console.error("No he encontrado ninguna película");
      } else {
        console.log(data);
        this.peliculas = data.Search;
      }
    })
  }

}


