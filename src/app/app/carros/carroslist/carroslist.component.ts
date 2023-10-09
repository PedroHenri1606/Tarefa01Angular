import { Component, inject } from '@angular/core';
import { Carros } from '../carros';
import { CarrosService } from '../carros.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carros[] = [];
  listaService = inject(CarrosService);
  indiceSelecionado!: number;
  carroSelecionado!: Carros;

  modalService = inject(NgbModal);

  constructor(){
    this.lista = this.listaService.lista;
  }

  abrirModal(modal: any){
    this.carroSelecionado = new Carros(0,"","");
    this.modalService.open(modal, {size: 'lg'});
  }

  abrirModalEditar(editar: any, carros: any, indice: number){
    this.indiceSelecionado = indice;
    this.carroSelecionado = carros;
    this.modalService.open(editar, {size: 'lg'});
  }

  adicionarCarro(nome: string,marca: string){
    this.listaService.adicionarCarro(nome,marca);
  }

  addNaLista(carro: Carros){
    if(carro.id > 0){
      this.lista[this.indiceSelecionado] = carro;
    } else {
      this.adicionarCarro(carro.nome,carro.marca);
    }
    this.modalService.dismissAll();
  }

}
