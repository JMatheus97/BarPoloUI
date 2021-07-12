import React from 'react';
import NavBar from '../components/NavBar/index';
import CardMesa from '../components/Mesas/index'

export default function PageEstoque() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="container-fluid">
                    <div  className="row" >
                        <div className="col-lg-12 m-sm-1">
                            <div className="card">
                                <div className="card-header text-center">Mesas</div>
                                <div className="card-body">
                                    <CardMesa/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}