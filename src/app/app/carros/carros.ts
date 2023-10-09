export class Carros{
    id!: number;
    nome!: string;
    marca!: string;
    
    constructor(id: number,nome: string, marca: string){
        this.id = id;
        this.nome = nome;
        this.marca = marca;
    }
}