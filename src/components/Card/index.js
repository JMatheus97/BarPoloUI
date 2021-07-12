import React from 'react';

import './styles.css';
import ModalCardComanda from '../Modal-Comanda/index';

export default function Card() {
    return (
        <div id="card01" className="col-lg-3">
            <div className="card" >
                <div className="card-header text-center">
                    <label className="form-label">Mesa01</label>
                </div>
                <a>
                    <button id="button-modal" data-bs-toggle="modal" data-bs-target="#comanda">
                        <div className="card-body">
                            <ul id="list">
                                <li>
                                    <label className="form-label"><strong>Cliene(S)</strong>dasd</label>
                                </li>
                                <li>
                                    <label className="form-label"><strong>Sub-Total:</strong> R$ 80,50 </label>
                                </li>
                            </ul>
                        </div>
                        <>
                            <ModalCardComanda />
                        </>
                    </button>
                </a>
            </div>
        </div>
    );
}
