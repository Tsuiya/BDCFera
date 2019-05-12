import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public alertController: AlertController ){}

  user: String;
  pass: String;

  entrar(){
    if ((this.user === 'Daniel') && (this.pass === 'Daniel12345')){
      this.sucesso(); 
      this.router.navigate(['/pag2']);

    } else {
            this.fracasso();
    }
  }

  async sucesso() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      subHeader: 'Logado',
      message: 'Login efetuado com sucesso.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async fracasso() {
    const alert = await this.alertController.create({
      header: 'Erro',
      subHeader: 'Ops...',
      message: 'Usuário ou senha estão errados.',
      buttons: ['OK']
    });

    await alert.present();
  }

  registro(){
    this.router.navigate(['/cadastro']);
  }

}
