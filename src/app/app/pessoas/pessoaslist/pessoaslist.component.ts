import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})

export class PessoaslistComponent {

  lista: Pessoa[] = [];
  listaService = inject(PessoaService);
  indiceSelecionado!: number;
  pessoaSelecionada!: Pessoa;

  modalService = inject(NgbModal);

  constructor(){
    this.lista = this.listaService.lista;
  }
  
  abrirModal(tipo: any){
    this.pessoaSelecionada = new Pessoa(0,"",0);
    this.modalService.open(tipo, {size: "lg"});
  }

  abrirModalEditar(editar: any, pessoa: any, indice: number){
    this.indiceSelecionado = indice;
    this.pessoaSelecionada = pessoa;
    this.modalService.open(editar, {size: 'lg'});
  }

  addNaLista(pessoa: Pessoa){
    if(pessoa.id > 0){
      this.lista[this.indiceSelecionado] = pessoa;
    } else {
      this.adicionarPessoa(pessoa.nome,pessoa.idade);
    }
    this.modalService.dismissAll();
  }

  adicionarPessoa(nome: string, idade: number){
    this.listaService.adicionarPessoa(nome,idade);
  }
}
