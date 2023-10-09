import { Injectable } from "@angular/core";
import { Carros } from "./carros";

@Injectable({
    providedIn:'root'
})
export class CarrosService{

    lista: Carros[] = [];
    proximoId: number = 2;

    constructor(){

        this.lista.push(new Carros(1,"911","Porshe"));
    }

    adicionarCarro(nome: string, marca: string): void{
        const novoCarro = new Carros(this.proximoId,nome,marca);
        this.lista.push(novoCarro);
        this.proximoId++;
    }

    findId(id: number): Carros{
        for(let i= 0; i < this.lista.length; i++){
            if(this.lista[i].id == id){
                return this.lista[i];
            }
        }
        this.proximoId++;
        return new Carros(0,"","");
    }
}