import * as types from './types';

export function loginRequest(payload?: any) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload?: any) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}

export function checkUserView(payload: any) {
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
