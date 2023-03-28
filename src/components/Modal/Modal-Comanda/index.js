import React from 'react';

import ModalComanda from '../../Card-Comanda/index';

export default function ModalCardComanda() {
  return (
    <div
      className="modal fade"
      id="comanda"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="staticBackdropLabel">
              Informações da Mesa
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body ">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mb-3">
                  <ModalComanda />
                </div>
                <div className="col-lg-3 mb-3">
                  <ModalComanda />
                </div>
                <div className="col-lg-3 mb-3">
                  <ModalComanda />
                </div>
                <div className="col-lg-3 mb-3">
                  <ModalComanda />
                </div>
                <div className="col-lg-3 mb-3">
                  <ModalComanda />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Nova Comanda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
