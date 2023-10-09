export class Pessoa{
    id!: number;
    nome!: string;
    idade!: number;

    constructor(id: number,nome: string,idade: number){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
}