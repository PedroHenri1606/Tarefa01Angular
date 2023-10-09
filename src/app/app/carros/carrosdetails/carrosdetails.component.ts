import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carros } from '../carros';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent implements OnInit{

  route = inject(ActivatedRoute);
  modalService = inject(NgbModal);
  
  lista: Carros[] = [];
  banco = inject(CarrosService);

  @Input() carro: Carros = new Carros(0,"","");
  @Output() retorno = new EventEmitter<Carros>();

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.carro = this.banco.findId(+id);
    }
  }

  ngOnInit(): void {
    this.carro = Object.assign({}, this.carro);
  }

  salvar(){
    this.retorno.emit(this.carro);
  }
}
