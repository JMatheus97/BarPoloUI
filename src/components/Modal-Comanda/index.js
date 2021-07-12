import React from 'react';

import ModalComanda from '../Card-Comanda/index';
export default function ModalCardComanda() {
    return (
        <div class="modal fade" id="comanda" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h5 class="modal-title" id="staticBackdropLabel">Informações da Mesa</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 mb-3">
                                    <ModalComanda />
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <ModalComanda />
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <ModalComanda />
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <ModalComanda />
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <ModalComanda />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Nova Comanda</button>
                    </div>
                </div>
                <>
                </>
            </div>
        </div>
    )
}