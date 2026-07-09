import { useRef, useState } from 'react';
import { v4 } from 'uuid';
import { AddButton, Conteiner, DeleteButton , Product, Button} from './styles';


function Home() {
  const inputNome = useRef();
  const inputPreco = useRef();
  const inputQuantidade = useRef();

  const [produtos, setProdutos] = useState([]);

  function cliqueiNoBotao() {
    // Pegamos os valores digitados
    const nome = inputNome.current.value;
    const preco = Number(inputPreco.current.value) || 0;
    const quantidade = Number(inputQuantidade.current.value) || 0;

    // Fazemos a multiplicação aqui
    const totalCalculado = preco * quantidade;

    // Adicionamos o novo produto na lista com o total já calculado
    setProdutos([
      {
        id: v4(),
        nome: nome,
        preco: preco.toFixed(2), // Salva com duas casas decimais (ex: 5.50)
        quantidade: quantidade,
        total: totalCalculado.toFixed(2) // Salva o total multiplicado
      },
      ...produtos
    ]);

    // Opcional: Limpa os campos após adicionar para facilitar a próxima digitação
    inputNome.current.value = '';
    inputPreco.current.value = '';
    inputQuantidade.current.value = '';
  }
  // 👇 NOVA FUNÇÃO: Filtra a lista removendo o item pelo ID
  function deletarProduto(id) {
    const novosProdutos = produtos.filter(produto => produto.id !== id);
    setProdutos(novosProdutos);
  }
  const valorTotalGeral = produtos.reduce((acumulador, produto) => {
  return acumulador + (Number(produto.total) || 0);
}, 0);//o codigo para calcular o valor total geral dos produtos adicionados, somando o total de cada produto na lista.

  return (
    <Conteiner>
      <h1>Lista de Compras</h1>

      <div style={{ marginBottom: '20px' }}>
        <input placeholder="Produto..." ref={inputNome} />
        <input placeholder="Preço..." type="number" ref={inputPreco} />
        <input placeholder="Quantidade..." type="number" ref={inputQuantidade} />
        <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
      </div>
{/* 2. Adicionado o valor total ao lado do título */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}></div>
    <h2>Total Geral: R$ {valorTotalGeral.toFixed(2)}</h2>
  
    {produtos.map((produto) => (
  <Product key={produto.id}>
    <p>Produto: {produto.nome}</p>  
    <p>Preço: R$ {produto.preco}</p>   
    <p>Qtd: {produto.quantidade}</p> {/* Dois pontos corrigidos aqui */} 
    <p>Valor: R$ {produto.total}</p>
    
    {/* O botão agora está dentro do Product, antes de fechar a tag */}
    <Button onClick={() => deletarProduto(produto.id)}>🗑️</Button>
  </Product>
))}

    </Conteiner>
  );
}

export default Home;