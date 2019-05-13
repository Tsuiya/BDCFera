import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  user: string;
  pass: string;
  rg: string;
  cpf: string;

  constructor(public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }
  
  inicio(){
    this.router.navigate(['/home']);
  }

  registrar(){
    this.registrado();
  }

  async registrado() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      subHeader: 'Registro',
      message: 'Você foi registrado com sucesso.',
      buttons: ['OK']
    });
  }
}
