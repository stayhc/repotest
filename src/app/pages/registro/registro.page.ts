import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl ,Validators ,FormBuilder} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;


  constructor(public fb: FormBuilder, 
    public alertController: AlertController, 
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }
  async guardar(){
    console.log('Evento Guardar');
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Atención',
        message: 'Los campos destacados son incorrectos o están incompletos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;

    }

    var usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      genero: f.genero,
      email: f.email,
      password: f.password

    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('Ingresado','true');
    this.navCtrl.navigateRoot('inicio');
  
  }

  onSubmit(){
    console.log('submit');
    console.log(this.formularioRegistro);
  }


}
