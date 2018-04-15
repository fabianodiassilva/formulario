import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PaginaLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-login',
  templateUrl: 'pagina-login.html',
})
export class PaginaLoginPage {

  public cUsuario
  public cSenha

  formLogin: FormGroup

  constructor(public fb: FormBuilder, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {

   this.cUsuario = this.navParams.get('_cUsuario')
   this.cSenha = this.navParams.get('_cSenha')

   this.formLogin = fb.group({
    usuario: [this.cUsuario,[Validators.required]],
    senha: [this.cSenha,[Validators.required, Validators.minLength(3)]]    
  })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaLoginPage');
  }

  validarLogin(){

    if ((this.formLogin.value.usuario == 'UNIPAM') && (this.formLogin.value.senha == 123)){
      this.bemVindo('SEJA BEM VINDO!');
      this.navCtrl.push('PaginaFormularioPage')
    }else{
        this.bemVindo('USUÁRIO/SENHA INCORRETOS!');
    }

  
 
  }

  bemVindo(_cMsg:string) {
    let alert = this.alertCtrl.create({
      title: _cMsg,
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

}
