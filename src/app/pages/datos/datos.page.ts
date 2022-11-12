import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Datos } from 'src/app/services/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  
  @ViewChild('myList')myList :IonList; 

  constructor(private storageService: ServicedatosService, 
    private plt: Platform, private toastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('Comentario agregado');
      this.loadDatos();
    });
  }

  updateDatos(dato: Datos ){
    dato.estado = `ACTUALIZADO: ${dato.estado}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Comentario actualizado')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Comentario eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 3000
    });
    toast.present();
  }

}
