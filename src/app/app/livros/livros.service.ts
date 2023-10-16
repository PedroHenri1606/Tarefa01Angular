import { Injectable, inject } from "@angular/core";
import { Livros } from "./livros";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class LivrosService{

    API: string = "http://localhost:8080/api/livro"
    http = inject(HttpClient);

    constructor(){}

    save(salvar: Partial<Livros>){
        if(salvar.id){[]
            console.log("update");
            return this.update(salvar);
        }
        console.log("salvar");
        return this.create(salvar);
    }
    
    erro(): Observable<Livros[]>{
        return this.http.get<Livros[]>(this.API + '/erro');
    }

    listar(): Observable<Livros[]>{
        return this.http.get<Livros[]>(this.API + '/listar');
    }

    buscarPorId(id: number){
        return this.http.get<Livros>(this.API + `/buscar?id=${id}`);
    }

    create(salvar: Partial<Livros>){
        return this.http.post<Livros>(this.API + '/cadastrar', salvar);
    }

    update(salvar: Partial<Livros>){
        return this.http.put<Livros>(this.API + `/editar?id=${salvar.id}`, salvar);
    }

    deletar(id: number){
        return this.http.delete<Livros>(this.API + `/deletar?id=${id}`);
    }

}