import React, { useState } from 'react';

import AuthenticationStore from '../../services/stores/AuthenticationStore';
import Snackbar from '@material-ui/core/Snackbar';
import './styles.css';


import { history } from '../../routes';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function save() {
        if (username && password) {
            AuthenticationStore.login(username, password)
                .then(() => {
                    if (AuthenticationStore.isAuthenticated === true) {
                        history.push('/app');
                        document.location.reload(true);
                        history.push('/app');
                        console.log("Autorizado")
                    }
                })
                .catch(e => {
                    setMessage('Usuário ou senha inválidos!');
                    console.log(message);
                });
        } else if (username || password === '') {
            setMessage('Usuário ou senha inválidos!');
        }
    };

    return (
        <>
            <div id="container" className="card  text-center col-lg-4">
                <div className="card-header text-center ">
                    Login
             </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Usuário</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={save}>Salvar</button>
                    </form>
                </div>
            </div>
            <Snackbar
                open={message !== ''}
                message={message}
                autoHideDuration={4000}
                onClose={() => setMessage('')}
            />
        </>
    )
}