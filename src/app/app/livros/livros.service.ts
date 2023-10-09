import { Injectable } from "@angular/core";
import { Livros } from "./livros";

@Injectable({
    providedIn:'root'
})
export class LivrosService{

    lista: Livros[] = [];
    proximoId: number = 2;

    constructor(){

        this.lista.push(new Livros(1,"Jhonson Jhonson", "Jhonsinho Jr"));
    }

    adicionarLivro(titulo: string, autor: string): void{
        const novoLivro = new Livros(this.proximoId,titulo,autor);
        this.lista.push(novoLivro);
        this.proximoId++;
    }

    findId(id: number): Livros{
        for(let i = 0; i < this.lista.length; i++){
            if(this.lista[i].id == id){
                return this.lista[i];
            }
        }
        this.proximoId++;
        return new Livros(0,"","");
    }

}