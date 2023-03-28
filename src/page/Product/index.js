import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

export default function Modal() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);

  const save = async () => {
    await axios
      .post('/product/new', { nome, valor })
      .then(() => {
        toast.success('Salvo com sucesso !');
      })
      .catch(() => {
        toast.error('Não foi possível salvar ! ');
      });
  };
  return (
    <div>
      <div
        className="modal fade"
        id="product"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Cadastro de Produto
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-lg-9">
                    <label htmlFor="codigo-barras" className="form-label">
                      Nome do Produto
                    </label>
                    <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
                  </div>
                  <div className="col-lg-3">
                    <label htmlFor="codigo-barras" className="form-label">
                      Valor
                    </label>
                    <input type="number" className="form-control" value={valor} onChange={(e) => setValor(parseFloat(e.target.value))} />
                  </div>
                </div>
              </div>
            </form>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Fechar
              </button>
              <button type="button" className="btn btn-primary" onClick={save}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
