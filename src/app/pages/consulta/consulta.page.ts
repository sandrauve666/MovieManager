import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonInput, IonButtons, IonList, IonItem, IonItemSliding, IonItemOption, IonItemOptions, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { MoviesManagerService } from 'src/app/services/movies-manager.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItemOptions, IonItemOption, IonItemSliding, IonItem, IonList, IonButtons, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ConsultaPage implements OnInit {

  s = inject(MoviesManagerService);
  tituloBuscado: string = "";
  peliculasFiltradas: Movie[];
  constructor() {
    this.peliculasFiltradas = this.s.getPeliculas();
  }

  ngOnInit() {
  }

  buscar() {
    this.peliculasFiltradas = 
      this.peliculasFiltradas.filter(
        /*p => p.titulo.toUpperCase().includes(this.tituloBuscado.toUpperCase())*/
        p => p.Title.toUpperCase().includes(this.tituloBuscado.toUpperCase())
      );
  }

}
