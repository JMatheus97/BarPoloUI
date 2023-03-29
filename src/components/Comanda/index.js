import React, { useState } from 'react';

export default function CadastroComanda() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(0);
  const [produto, setProduto] = useState('');
  return (
    <form>
      <div className="col-lg-12 mb-2">
        <label htmlFor="nome" className="form-label">
          Nome do Cliente
        </label>
        <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div className="col-lg-12 mb-2">
        <label htmlFor="produto" className="form-label">
          Produto
        </label>
        <select className="form-control" value={produto} onChange={(e) => setProduto(e.target.value)}>
          <option selected>...</option>
          <option value="Coca-cola" selected>
            Coca-cola
          </option>
          <option value="Brahma">Brahma</option>
        </select>
      </div>
      <div className="col-lg-12 mb-2">
        <label htmlFor="quantidade" className="form-label">
          Quantidade
        </label>
        <input type="number" className="form-control" value={quantidade} onChange={(e) => setQuantidade(parseFloat(e.target.value))} />
      </div>
      <div className="col-lg-12 mb-3 mb-2">
        <label htmlFor="preco" className="form-label">
          Preco
        </label>
        <input type="number" className="form-control" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
      </div>
      <button type="button" id="salvar-comanda" className="btn btn-success">
        Salvar
      </button>
    </form>
  );
}
