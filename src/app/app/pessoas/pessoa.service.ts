import { Injectable } from "@angular/core";
import { Pessoa } from "./pessoa";

@Injectable({
    providedIn: 'root'
})
export class PessoaService{

    lista: Pessoa [] = []
    proximoId: number = 2;
    
    constructor(){
        
        this.lista.push(new Pessoa(1,"Pedro", 20));
    }

    adicionarPessoa(nome: string, idade: number): void{
        const novaPessoa = new Pessoa(this.proximoId,nome,idade);
        this.lista.push(novaPessoa);
        this.proximoId++;
    }

    findId(id: number) : Pessoa{
        for(let i=0; i < this.lista.length; i++){
            if(this.lista[i].id == id){
                return this.lista[i];
            }
        }
        this.proximoId++;
        return new Pessoa(0,"",0);
    }
}