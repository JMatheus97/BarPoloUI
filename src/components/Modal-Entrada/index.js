import React, { useState } from 'react';

export default function Modal() {
    const [codigo, setCodigo] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [validade, setValidade] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState('');

    function save(){
        var estoque = {
            codigo,
            quantidade,
            validade,
            unidadeMedida
        }
        console.log(estoque);
    }
    return (
        <div>
            <div className="modal fade" id="entrada" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Entrada produto no estoque</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-lg-9">
                                        <label htmlFor="codigo-barras" className="form-label">Codigo de Barras</label>
                                        <input type="text" className="form-control" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="codigo-barras" className="form-label">Quantidade</label>
                                        <input type="number" className="form-control" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="codigo-barras" className="form-label">Validade</label>
                                        <input type="date" className="form-control" value={validade} onChange={(e) => setValidade(e.target.value)}/>
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="codigo-barras" className="form-label">Unidade de Medida</label>
                                        <input className="form-control" value={unidadeMedida} onChange={(e) => setUnidadeMedida(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary" onClick={save}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}