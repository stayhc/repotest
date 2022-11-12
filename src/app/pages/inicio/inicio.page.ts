import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
      icon: 'people-circle-outline',
      name: 'Nosotros',
      redirecTo: '/nosotros'
    },
  ];

  constructor(private menuController: MenuController,
    public toastController: ToastController) { }
  

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  

}
