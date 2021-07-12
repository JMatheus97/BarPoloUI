import React from 'react';


export default function CardComanda() {
    return (
        <div id="card01">
            <div className="card" >
                <div className="card-header text-center">
                    <label className="form-label">Comanda</label>
                </div>
                <a href="/comanda-mesa"> 
                    <div className="card-body">
                        <ul id="list">
                            <li>
                                <label className="form-label"><strong>Nome</strong>dasd</label>
                            </li>
                            <li>
                                <label className="form-label"><strong>Valor:</strong> R$ 12,50 </label>
                            </li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
    );
}