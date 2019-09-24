import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprar-pizza',
  templateUrl: './comprar-pizza.page.html',
  styleUrls: ['./comprar-pizza.page.scss'],
})
export class ComprarPizzaPage implements OnInit {
  idpizza;
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.snapshot.params.id
  }

  ngOnInit() {
  }
  ionviewDidEnter(){
    this.idpizza = this.activatedRoute.snapshot.params.id
  }

}
