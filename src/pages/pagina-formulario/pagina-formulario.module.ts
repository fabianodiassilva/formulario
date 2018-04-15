import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaFormularioPage } from './pagina-formulario';

@NgModule({
  declarations: [
    PaginaFormularioPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaFormularioPage),
  ],
})
export class PaginaFormularioPageModule {}
