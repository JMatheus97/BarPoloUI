import * as types from './types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function checkUserView(payload) {
  return {
    type: types.CHECK_USER_VIEW,
    payload,
  };
}

export function clearUserView() {
  return {
    type: types.CLEAR_USER_VIEW,
  };
}
