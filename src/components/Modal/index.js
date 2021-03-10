import React from 'react';

import './styles.css';

export default function Modal() {
    return (
        <div>
            <button id="container" type="button" className="btn btn-success d-flex flex-row justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Entrada
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Entrada produto no estoque</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="codigo-barras" className="form-label">Codigo de Barras</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}