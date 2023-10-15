import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Carro } from '../carros';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent implements OnInit{

  @Input() carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  service = inject(CarrosService);

  constructor(){}

  ngOnInit(): void {
    
  }

  cadastrar(){
    this.service.save(this.carro).subscribe({
      next: carro => {
        this.retorno.emit(carro);
      },
      error: erro => {
        alert("Exemplo de tratamento de erro/exception! Observe o erro no console!");
        console.error(erro);
      }
    })
  }
}
