import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './action';
import * as types from './types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const { userName, password } = payload;
    const response = yield call(axios.post, '/user/login', {
      userName,
      password,
    });

    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você está logado');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error('usuário ou senha inválido');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest), takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)]);
