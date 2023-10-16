import Image from 'next/image'
import styles from './page.module.css'
import { ListaClash } from '@/models/clashRoyale'

const listaClash = new ListaClash();

export default function Home() {
  return (
    <main>
      <div>
        <h1>Cadastro personagem</h1>
        <label>Nome do personagem</label>
        <input id="nome_input" type="text" placeholder="Digite o nome do personagem" />

        <label>Imagem do personagem</label>
        <input id="imagem_input" type="text" placeholder="Digite o link da imagem" />

        <label>Descrição do personagem</label>
        <input id="descricao_input" type="text" placeholder="Digite a descrição do personagem" />





        <label>Selecione o nível da carta</label>
        <select id="tipo_input">
          <option value="text">Carta Comum</option>
          <option value="text"> Carta Rara</option>
          <option value="text"> Carta Épica</option>
          <option value="text">Carta Lendária </option>
          <option value="text">Cartas dos Campeões</option>
        </select>

        <label>Selecione a categoria da carta</label>
        <select id="categoria_input">
          <option value="tropas">Cartas de Tropas</option>
          <option value="feitiços">Cartas de Feitiços</option>
          <option value="estruturas">Cartas de Estruturas</option>
        </select>
        <button>enviar</button>
      </div>

    </main>
  )
}
