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

  service = inject(LivrosService);
  modalService = inject(NgbModal);

  lista: Livros[] = [];

  indiceSelecionado!: number;
  livroSelecionado!: Livros;

 constructor(){
  this.listarTodos();
 }

 listarTodos(){
  this.service.listar().subscribe({
    next: lista => {
      this.lista = lista;
    },
    error: erro => {
      alert("Exemplo de tratamento de erro/exception! Observe o erro no console!");
      console.error(erro);
    }
  });
 }

 adicionar(modal: any){
  this.livroSelecionado = new Livros();
  this.modalService.open(modal, {size: 'lg'});
 }

 editar(modal: any, livro: Livros, id: number){
  this.livroSelecionado = livro;
  this.indiceSelecionado =id;
  this.modalService.open(modal, {size: 'lg'});
 }

 buscarPorId(modal:any, id: number){
  this.livroSelecionado = this.lista[id - 1];
  this.indiceSelecionado = id;
  this.modalService.open(modal, {size: 'lg'});
 }
 
 deletar(livro: Livros){
  this.service.deletar(livro.id).subscribe(() =>
    {
      console.log("Livro deletado com sucesso!");
      this.listarTodos();
    })
 }

 salvar(livro: Livros){
  if(livro.id > 0){
    this.lista[this.indiceSelecionado] = livro;

  } else {
    this.lista.push(livro);
  }

  this.modalService.dismissAll();
  this.listarTodos();
 }
}
