import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './app/layout/index/index.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';

const routes: Routes = [
  {path: "" , redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "admin", component: IndexComponent, children: [

    {path: "pessoas", component: PessoaslistComponent},
    {path: "pessoas/novo", component: PessoasdetailsComponent },
    {path: "pessoas/editar/:id", component: PessoasdetailsComponent },

    {path: "carros", component: CarroslistComponent},
    {path: "carros/novo", component: CarrosdetailsComponent},
    {path: "carros/editar/:id", component: CarrosdetailsComponent},

    {path: "livros", component: LivroslistComponent},
    {path: "livros/novo", component: LivrosdetailsComponent},
    {path: "livros/editar/:id", component: CarrosdetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
