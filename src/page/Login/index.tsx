import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import * as _ from 'lodash';
import { useDispatch } from 'react-redux';
import { Container, Form } from './styled';
import * as actions from '../../store/modules/auth/action';

export const Login = (props: any) => {
  const dispatch = useDispatch();

  const prevPath = _.get(props, 'location.state.prevePath', '/app');

  const [userName, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function hundleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let formErrors = false;

    if (userName === '') {
      formErrors = true;
      toast.error('Usuário inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve conter entre 6 e 50 caracter');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ userName, password, prevPath }));
  }

  return (
    <Container>
      <Form onSubmit={(e) => hundleSubmit(e)}>
        <label htmlFor="username">
          Usuário
          <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="senha">
          Senha
          <input type="password" value={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};
