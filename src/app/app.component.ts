import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular'
import { NavController } from '@ionic/angular';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public alertController: AlertController, 
    public navCtrl: NavController) {}

  componentes : Componente[] = [
    {
      icon: 'people-circle-outline',
      name: 'Nosotros',
      redirecTo: '/nosotros'
    },
    {
      icon: 'newspaper-outline',
      name: 'Noticias',
      redirecTo: '/noticias'
    },
    {
      icon: 'chatbox-ellipses-outline',
      name: 'Comentarios',
      redirecTo: '/datos'
    },
  
  ];

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Desea cerrar su sesión?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
  }

}
