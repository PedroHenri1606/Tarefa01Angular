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

  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  service = inject(PessoaService);

  constructor(){}

  ngOnInit(): void {
    
  }

  salvar(){
    this.service.save(this.pessoa).subscribe({
      next: pessoa => {
        this.retorno.emit(pessoa);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }
}
