import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { LivrosService } from '../livros.service';
import { Livros } from '../livros';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent implements OnInit{

  @Input() livro: Livros = new Livros();
  @Output() retorno = new EventEmitter<Livros>();

  service = inject(LivrosService);
  
  constructor(){}

  ngOnInit(): void {
  
  }

  cadastrar(){
    this.service.save(this.livro).subscribe({
      next: livro => {
        this.retorno.emit(livro);
      },
      error: erro => {
        alert("Exemplo de tratamento de erro/exception! Observe o erro no console!");
        console.error(erro);
      }
    });
  }
}
