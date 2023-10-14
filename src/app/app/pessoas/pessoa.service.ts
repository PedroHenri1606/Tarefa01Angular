import { Injectable, inject } from "@angular/core";
import { Pessoa } from "./pessoa";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PessoaService{

    API: string = 'http://localhost:8080/api/pessoa';
    http = inject(HttpClient);
    
    constructor(){}

    save(salvar: Partial<Pessoa>){
        if(salvar.id){
            console.log("update");
            return this.update(salvar);
        }
        console.log("salvar");
        return this.create(salvar);
    }

    erro(): Observable<Pessoa[]>{
        return this.http.get<Pessoa[]>(this.API + '/erro');
    }

    listar(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(this.API + '/listar');
    }

    buscarPorId(id: number){
        return this.http.get<Pessoa>(this.API + `/buscar?id=${id}`)
    }

    create(salvar: Partial<Pessoa>){
        return this.http.post<Pessoa>(this.API + '/cadastrar', salvar);
    }

    update(salvar: Partial<Pessoa>){
        return this.http.put<Pessoa>(this.API + `/editar?id=${salvar.id}`, salvar);
    }

    deletar(id: number){
        return this.http.delete<Pessoa>(this.API + `/deletar?id=${id}`);
    }

}