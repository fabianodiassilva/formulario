import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaginaFormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-formulario',
  templateUrl: 'pagina-formulario.html',
})
export class PaginaFormularioPage {

  formDadosPessoais: FormGroup

  constructor(public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {

    this.formDadosPessoais = fb.group({
      nome: [null,[Validators.required]],
      endereco: [null,[Validators.required]],
      cidade: [null,[Validators.required]],
      telefone: [null,[Validators.required, Validators.minLength(8)]],
      cpf: [null,[Validators.required, Validators.minLength(11)]]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaFormularioPage');
  }

  irParaHome(){
    this.navCtrl.push(HomePage)
  }

  enviarDados(){
    console.log(this.formDadosPessoais.value)
  }

}
