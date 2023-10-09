import { Component, inject } from '@angular/core';
import { Livros } from '../livros';
import { LivrosService } from '../livros.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livros[] = [];
  listaService = inject(LivrosService);
  indiceSelecionado!: number;
  livroSelecionado!: Livros;

  modalService = inject(NgbModal);

  constructor(){
    this.lista = this.listaService.lista;
  }

  abrirModal(modal: any){
    this.livroSelecionado = new Livros(0,"","");
    this.modalService.open(modal, {size: 'lg'})
  }

  abrirModalEditar(editar: any, livro: any, indice: number){
    this.indiceSelecionado = indice;
    this.livroSelecionado = livro;
    this.modalService.open(editar, {size:'lg'})
  }

  adicionarLivro(titulo: string, autor: string){
    this.listaService.adicionarLivro(titulo,autor);
  }

  addNaLista(livro: Livros){
    if(livro.id > 0){
      this.lista[this.indiceSelecionado] = livro;
    } else {
      this.adicionarLivro(livro.titulo,livro.autor);
    }
    this.modalService.dismissAll();
  }
}
