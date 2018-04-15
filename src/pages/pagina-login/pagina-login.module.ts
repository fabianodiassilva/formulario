import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaLoginPage } from './pagina-login';

@NgModule({
  declarations: [
    PaginaLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaLoginPage),
  ],
})
export class PaginaLoginPageModule {}
