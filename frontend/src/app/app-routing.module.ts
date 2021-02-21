import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { ListaCrudComponent } from './views/lista-crud/lista-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "aluno",
  component: AlunoCrudComponent
},{
  path: "lista",
  component: ListaCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
