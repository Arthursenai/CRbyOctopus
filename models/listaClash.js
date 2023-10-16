export default class Personagem {
    constructor(nome, descricao, categoria, Ncarta) {
        this.id = this.gerarId();
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.Ncarta = Ncarta;
        /* Ncarta = nivel da carta */
        /* Cartas Comuns têm 15 níveis diferentes.
As Cartas Raras têm 13 níveis diferentes, indo do nível 3 ao nível 15.
As Cartas Épicas têm 10 níveis diferentes, do 6 ao nível 15.
As Cartas Lendárias têm 7 níveis diferentes, do nível 9 ao nível 15.
Cartas dos Campeões tem 5 níveis, que vai do nível 11 ao nível 15. */
    }
    gerarId() {
        return Math.floor(Math.random() * 1000)
    }
}