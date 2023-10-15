import { Component, inject } from '@angular/core';
import { Carro } from '../carros';
import { CarrosService } from '../carros.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  //ELA RECEBE OS DADOS RECEBIDOS PELA SERVICE E FAZ A MANIPULAÇÃO E PREPARAÇÃO PARA ENVIAR ELES PARA O VIEW (ARQUVIO HTML DO COMPONENTE);
  
  modalService = inject(NgbModal);

  //INJEÇÃO DA SERVICE - SEMELHANTE AO AUTOWIRED DO JAVA
  service = inject(CarrosService);

  lista: Carro[] = [];

  indiceSelecionado!: number;
  carroSelecionado!: Carro;
  
  constructor(){
    this.listarTodos(); 
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      }, 
      error: erro =>{
        alert("Exemplo de tratamento de erro/exception! Observe o erro no console!");
        console.error(erro);
      }
    });
  }

  adicionar(modal: any){
    this.carroSelecionado = new Carro();
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, carro: Carro, id: number){
    this.carroSelecionado = carro;
    this.indiceSelecionado = id;
    this.modalService.open(modal, {size: 'lg'});
  }

  deletar(carro: Carro){
    this.service.deletar(carro.id).subscribe(() =>
    {
      console.log("Carro deletado com sucesso!");
      this.listarTodos();
    })
  }

  salvar(carro: Carro){
    if(carro.id > 0){
      this.lista[this.indiceSelecionado] = carro;
    
    } else {
      this.lista.push(carro);
    }

    this.modalService.dismissAll();
    this.listarTodos();
  }


}
