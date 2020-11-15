import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { InformativoComponent } from './informativo/informativo.component';

const routes: Routes = [
  { path: '', component: InformativoComponent},
  { path: 'conteudo', component: ConteudoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformativoRoutingModule { }
