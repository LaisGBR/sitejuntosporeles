import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntarioRoutingModule } from './voluntario-routing.module';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VoluntarioHomeComponent } from './voluntario-home/voluntario-home.component';
import { VoluntarioSobreComponent } from './voluntario-sobre/voluntario-sobre.component';
import { VoluntarioJunteSeNosComponent } from './voluntario-junte-se-nos/voluntario-junte-se-nos.component';
import { VoluntarioInformativoComponent } from './voluntario-informativo/voluntario-informativo.component';
import { VoluntarioAdoteComponent } from './voluntario-adote/voluntario-adote.component';
import { VoluntarioConteudoComponent } from './voluntario-conteudo/voluntario-conteudo.component';


@NgModule({
  declarations: [VoluntarioComponent, VoluntarioHomeComponent, VoluntarioSobreComponent, VoluntarioJunteSeNosComponent, VoluntarioInformativoComponent, VoluntarioAdoteComponent, VoluntarioConteudoComponent],
  imports: [
    CommonModule,
    VoluntarioRoutingModule,
    NgbModule
    
  ]
})
export class VoluntarioModule { }
