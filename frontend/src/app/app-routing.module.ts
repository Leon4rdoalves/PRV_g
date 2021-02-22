import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { ListaCrudComponent } from './views/lista-crud/lista-crud.component';
import { AlunoCreateListaComponent } from './components/aluno/aluno-create-lista/aluno-create-lista.component';
import { FormListaComponent } from './components/lista/form-lista/form-lista.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "aluno",
  component: AlunoCrudComponent
},{
  path: "aluno/create",
  component: AlunoCreateComponent
},{
  path: "aluno/update/:id",
  component: AlunoUpdateComponent
},{
  path: "aluno/delete/:id",
  component: AlunoDeleteComponent
},{
  path: "lista",
  component: ListaCrudComponent
},{
  path: "lista/create",
  component: AlunoCreateListaComponent
},{
  path: "lista/nova", 
  component: FormListaComponent
},{
  path: "lista/editar",
  component: FormListaComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
