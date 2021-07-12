import React from 'react';
import NavBar from '../components/NavBar/index';
import CadastroComanda from '../components/Comanda/index';

export default function PageEstoque() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-lg-4 mt-3">
                            <div id="aside-bar1" className="card" >
                                <div className="card-header text-center">Cadastro Comanda</div>
                                <div className="card-body ">
                                    <CadastroComanda/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-3">
                            <div className="card">
                                <div className="card-header text-center">Itens</div>
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}