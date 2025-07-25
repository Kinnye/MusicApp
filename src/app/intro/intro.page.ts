import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router'
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntroPage implements OnInit {

  bgColor = 'var(--bg-color)';
  titleColor = 'var(--title-color)';
  textColor = 'var(--text-color)';

 introSliders = [
  {
    title: 'Haz de tu fiesta un show inolvidable',
    description: 'Transforma cada celebración en una experiencia única con músicos que harán vibrar a todos tus invitados. ¡Nada de playlists aburridas! Trae música en vivo, talento local y energía real a tu celebración.',
    image: 'assets/images/slider1.jpg'
  },
  {
    title: 'Apoya el talento local mientras creas momentos únicos',
    description: 'Descubre el poder de la música hecha cerca de ti. Cada nota, cada letra y cada ritmo esconde historias reales de artistas que sueñan con llegar lejos.',
    image: 'assets/images/slider2.jpg'
  },
  {
    title: 'La música une, y nosotros hacemos que eso ocurra.',
    description: 'Descubre una experiencia musical pensada para conectar. En nuestra app, cada nota, playlist y artista tiene el poder de unir emociones, recuerdos y personas. Explora géneros, apoya a talentos emergentes y crea la banda sonora de tu día a día.',
    image: 'assets/images/slider3.jpg'
  },

];


  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl("/home")
    //al volver atras o volver al home guardar en el storage que ya estuve o vi la pagina de intro
  }


  async goHome() {
    try {
      await this.storageService.set('validateIntro', true);
      console.log('Intro marcada como vista');
      this.router.navigateByUrl('/menu/home');
    } catch (error) {
      console.error('Error guardando en el storage:', error);
    }
  }

}
