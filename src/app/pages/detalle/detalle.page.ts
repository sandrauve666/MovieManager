import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallePage implements OnInit {


  private activatedRoute = inject(ActivatedRoute);
  private imdbID: string = "";
  servicioOMDB: any;
  peliculaCompleta: any;

  constructor() { }

  ngOnInit() {
    this.imdbID = (this.activatedRoute.snapshot.paramMap.get('imdbID') as string);
    this.servicioOMDB.getMovie(this.imdbID).subscribe((pelicula: any) => {
      this.peliculaCompleta = pelicula;
    })
    console.log(this.imdbID);
  }

}
