import React, { useState } from 'react';

export default function Modal() {
  const [codigo, setCodigo] = useState('');

  function save() {
    const estoque = {
      codigo,
    };

    console.log(estoque);
  }
  return (
    <div>
      <div
        className="modal fade"
        id="saida"
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
                Saida produto no estoque
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form>
              <div className="modal-body">
                <label htmlFor="codigo-barras" className="form-label">
                  Codigo de Barras
                </label>
                <input type="text" className="form-control" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
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
