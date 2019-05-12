import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  informacoes1(){
    this.router.navigate(['/informacoes']);
  }

  contato1(){
    this.router.navigate(['/contato']);
  }

  cliente1(){
    this.router.navigate(['/cliente']);
  }
  
  suporte1(){
    this.router.navigate(['/suporte']);
  }

}
