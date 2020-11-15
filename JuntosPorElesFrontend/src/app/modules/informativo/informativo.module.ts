import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformativoRoutingModule } from './informativo-routing.module';
import { InformativoComponent } from './informativo/informativo.component';
import { ConteudoComponent } from './conteudo/conteudo.component';


@NgModule({
  declarations: [InformativoComponent, ConteudoComponent],
  imports: [
    CommonModule,
    InformativoRoutingModule
  ]
})
export class InformativoModule { }
