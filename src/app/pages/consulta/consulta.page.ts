import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonInput, IonButtons, IonList, IonItem, IonItemSliding, IonItemOption, IonItemOptions, IonLabel, IonAlert } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { MoviesManagerService } from 'src/app/services/movies-manager.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
  standalone: true,
  imports: [IonAlert, IonLabel, IonItemOptions, IonItemOption, IonItemSliding, IonItem, IonList, IonButtons, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ConsultaPage implements OnInit {

  s = inject(MoviesManagerService);
  tituloBuscado: string = "";
  peliculasFiltradas: Movie[];
  borrando: boolean = false;
  public ocultarDialogo(){
    this.borrando=false;
  }
  eliminar() {
    console.error("Eliminando....");
    this.borrando = true;
  }

  public alertButtons = [
    {
      text: 'CANCELAR',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'BORRAR',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  
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
