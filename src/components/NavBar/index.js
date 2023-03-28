import React from 'react';
import Stock from '../../page/Stock';
import Product from '../../page/Product';

export default function NavBar() {
  return (
    <>
      {' '}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            BarPolo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cadastro
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" data-bs-toggle="modal" href="#product">
                      Produto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" data-bs-toggle="modal" href="#entrada">
                      Estoque
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mesa
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Stock />
      <Product />
    </>
  );
}
