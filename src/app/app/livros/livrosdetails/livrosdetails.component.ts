import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivrosService } from '../livros.service';
import { Livros } from '../livros';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent implements OnInit{

  route = inject(ActivatedRoute);
  modalService = inject(NgbModal);
  
  lista: Livros[] = [];
  banco = inject(LivrosService);

  @Input() livro: Livros = new Livros(0,"","");
  @Output() retorno = new EventEmitter<Livros>();
  
  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.livro = this.banco.findId(+id);
    }
  }

  ngOnInit(): void {
    this.livro = Object.assign({}, this.livro);
  }

  salvar(){
    this.retorno.emit(this.livro);
  }
}
