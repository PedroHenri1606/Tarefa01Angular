import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})

export class PessoaslistComponent {

  lista: Pessoa[] = [];

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = 'Pedro Henrique';
    pessoa1.idade = 11;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = 'Pedro Henrique';
    pessoa2.idade = 35;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = 'Pedro Henrique';
    pessoa3.idade = 45;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = 'Pedro Henrique';
    pessoa4.idade = 22;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = 'Pedro Henrique';
    pessoa5.idade = 1;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = 'Pedro Henrique';
    pessoa6.idade = 15;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = 'Pedro Henrique';
    pessoa7.idade = 5;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = 'Pedro Henrique';
    pessoa8.idade = 2;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = 'Pedro Henrique';
    pessoa9.idade = 12;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = 'Pedro Henrique';
    pessoa10.idade = 10;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);

  }
}
