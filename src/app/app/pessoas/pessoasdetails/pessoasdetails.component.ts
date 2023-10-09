import { Component,EventEmitter,Input,OnInit,Output,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent implements OnInit {

  roteador = inject(ActivatedRoute);
  modalService = inject(NgbModal);
  lista: Pessoa[] = [];
  banco = inject(PessoaService);

  @Input() pessoa: Pessoa = new Pessoa(0,"", 0);

  @Output() retorno = new EventEmitter<Pessoa>();
  
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');

    if(id){
      this.pessoa = this.banco.findId(+id);
    }
  }

  ngOnInit() :void{
    this.pessoa = Object.assign({}, this.pessoa);
  }

  salvar(){
    this.retorno.emit(this.pessoa);
  }
}
