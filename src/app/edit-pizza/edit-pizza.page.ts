import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.page.html',
  styleUrls: ['./edit-pizza.page.scss'],
})
export class EditPizzaPage {
  nomepizza: String = ""
  descricaopizza: String = ""
  precopizza: String = ""
  idpizza: String = ""
  constructor(private activatedroute: ActivatedRoute, private nav:NavController) { } 

    ionViewDidEnter() {
    this.idpizza = this.activatedroute.snapshot.params.id
    this.recuperarpizza(this.idpizza)

  }

  recuperarpizza(idpizza) {
    console.log(idpizza)
    let pizzaString = localStorage.getItem(idpizza)
    let pizzaObjeto = JSON.parse(pizzaString)
    console.log(pizzaObjeto)
    this.nomepizza = pizzaObjeto.nomePizza
    this.descricaopizza = pizzaObjeto.descricaoPizza
    this.precopizza = pizzaObjeto.precoPizza

  }
   editar(form){
    let dadospizza= form.value
    dadospizza.id=this.idpizza
    let dadosString = JSON.stringify(dadospizza)
    localStorage.setItem(this.idpizza.toString(),dadosString)
    this.voltarParaHome()
   }
   
   voltarParaHome() {
    this.nav.back()
  }

}
