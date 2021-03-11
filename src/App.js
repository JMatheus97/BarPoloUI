import React from 'react';
import NavBar from './components/NavBar/index';
import ModalEntrada from './components/Modal-Entrada/index';
import ModalSaida from './components/Modal-Saida/index';
import './App.css';
function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="container-fluid">
          <div id="aside-bar1" className="row" >
            <div className="col-lg-2">
              <div className="card card text-center">
                <div className="card-header">Entrada Produto</div>
                <div className="card-body">
                  <button id="container" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#entrada">
                    Entrada
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="card">
                <div className="card-header"> </div>
                <div className="card-body">
                </div>
              </div>
            </div>
          </div>
          <div id="aside-bar2" className="row" >
            <div className="col-lg-2">
              <div className="card card text-center">
                <div className="card-header">Saída Produto</div>
                <div className="card-body">
                <button id="container" type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#saida">
                    Saída
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
      <ModalEntrada/>
      <ModalSaida/>
    </div >
  );
}

export default App;
