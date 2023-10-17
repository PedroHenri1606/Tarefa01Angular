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

  pessoaSelecionada: Pessoa = new Pessoa();
  indiceSelecionado!: number;

  modalService = inject(NgbModal);
  service = inject(PessoaService);

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  adicionar(modal: any){
    this.pessoaSelecionada = new Pessoa();
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(editar: any, pessoa: any, indice: number){
    this.indiceSelecionado = indice;
    this.pessoaSelecionada = pessoa;
    this.modalService.open(editar, {size: 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.pessoaSelecionada = this.lista[id -1];
    this.indiceSelecionado = id;
    this.modalService.open(modal, {size: 'lg'});
  }

  deletar(pessoa: Pessoa){
    this.service.deletar(pessoa.id).subscribe(()=>
      {
        console.log("Pessoa deletada com sucesso!");
        this.listarTodos();
      })
  }

  salvar(pessoa: Pessoa){
    if(pessoa.id > 0){
      this.lista[this.indiceSelecionado] = pessoa;

    } else{
      this.lista.push(pessoa);
    }

    this.modalService.dismissAll();
    this.listarTodos();
  }
}
