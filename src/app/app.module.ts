import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { IndexComponent } from './app/layout/index/index.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoaslistComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    PessoasdetailsComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LivrosdetailsComponent,
    LivroslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
