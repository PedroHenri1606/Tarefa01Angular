import { Component } from '@angular/core';
import { Carros } from '../carros';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carros[] = [];

  constructor(){

    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));
    this.lista.push(new Carros("911", "Porshe"));

  }
}
