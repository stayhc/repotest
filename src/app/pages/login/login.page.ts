import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public toastController: ToastController,
    public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingreso exitoso');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'Usuario o contraseña incorrecta',
        message: 'Vuelva a intentarlo',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

   async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message: 'Bienvenido Eder',
        duration: 5000
      }
    );
    toast.present();
  }

}