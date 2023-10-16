export class ListaClash {
    constructor() {
        this.historico = [];
    }

    adicionarPersonagem(nome, descricao, categoria, Ncarta) {
        const novoPersonagem = new Personagem(nome, descricao, categoria, Ncarta);

        this.historico.push(novoPersonagem);
        this.atualizarValores();
    }

    getHistorico() {
        return this.historico;
    }

    getPersonagemPorId(id) {
        const personagem = this.historico.find(
            (personagem) => personagem.id === id
        );

        return personagem;
    }
}

