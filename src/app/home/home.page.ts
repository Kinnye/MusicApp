import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  
  colorClaro = 'var(--color-claro)';
  colorOscuro = 'var(--color-oscuro)';
  temaActual = 'oscuro';

  colorActual = this.colorOscuro;
   

  genres =[
    {
      title: "Musica Clasica",
      image: "https://static.wixstatic.com/media/0965af_c18764ae42fc43998b8ad8bfda57ef02~mv2.jpg/v1/fill/w_740,h_740,al_c,q_85,enc_avif,quality_auto/0965af_c18764ae42fc43998b8ad8bfda57ef02~mv2.jpg",
      description: "SLa música clásica es un género musical occidental que abarca composiciones desde el siglo XI hasta la actualidad, pero generalmente se refiere a la música escrita durante el período clásico (1750-1820) y sus obras previas y posteriores Se caracteriza por su estructura, complejidad armónica y melódica "
      
    },
     {
      title: "Electro house",
      image: "https://lacorriente.com/wp-content/uploads/2020/12/musica-electronica-lacorriente.jpg",
      description: "El electro house es un subgénero de la música electrónica de baile, específicamente del house, caracterizado por bajos potentes y un tempo que oscila entre 125 y 135 pulsaciones por minuto (BPM). Combina elementos del house y del electro, a menudo fusionados con synthpop, techno y electroclash"
      
    },
     {
      title: "Hip Hop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxKAjjxiJFJUPdISDdoKugl5X7zA3RX9hUYHKukBrC5lo7QM7ePJueRbzmLu91_7m5RY&usqp=CAU",
      description: "El hip hop es un género musical que se originó en la década de 1970 en los barrios marginales de Nueva York. El hip hop es una forma de expresión artística que combina el rap, el canto, la danza y el graffiti"
      
    }



  ]
  constructor() {}

  cambiarColor(){
    this.colorActual = this.colorActual === this.colorOscuro ? this.colorClaro : this.colorOscuro

    this.temaActual = this.temaActual === 'oscuro' ? 'claro' : 'oscuro';


  }
}
