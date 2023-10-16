import { Injectable, inject } from "@angular/core";
import { Carro } from "./carros";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CarrosService{

    //COMO SE FOSSE A SERVICE DO JAVA
    //
    //ELA FAZ CONEXÃO COM O BACK-END E EXECUTA OS ENDPOINTS, POREM NÃO FAZ REGRA DE NEGOCIOS OU MANIPULAÇÃO DOS DADOS
    //ESSA FUNÇÃO É REPASSADA AO ARQUIVO TYPESCRIPT DO COMPONENTE   

    API: string = "http://localhost:8080/api/carro";
    http = inject(HttpClient);

    constructor(){}

    save(salvar: Partial<Carro>){
        if(salvar.id){
            console.log("update");
            return this.update(salvar);
        
        } else {
        console.log("salvar");
        return this.create(salvar);
        }
    }

    erro(): Observable<Carro[]>{
        return this.http.get<Carro[]>(this.API + '/erro');
    }

    listar(): Observable<Carro[]>{
        return this.http.get<Carro[]>(this.API + '/listar');
    }

    buscarPorId(id: number){
        return this.http.get<Carro>(this.API + `/buscar?id=${id}`);
    }

    create(salvar: Partial<Carro>){
        return this.http.post<Carro>(this.API + '/cadastrar', salvar);
    }

    update(salvar: Partial<Carro>){
        return this.http.put<Carro>(this.API + `/editar?id=${salvar.id}`, salvar);
    }

    deletar(id: number){
        return this.http.delete<Carro>(this.API + `/deletar?id=${id}`);
    }
}