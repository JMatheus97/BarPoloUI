import * as types from './types';

const initialState = {
  isLoggedln: false,
  token: false,
  usuario: {},
  userView: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newSate = { ...state };
      return newSate;
    }

    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedln = true;
      newState.token = action.payload.token;
      newState.usuario = action.payload.usuario;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...state };
      newState.isLoggedln = false;
      newState.usuario = {};
      newState.token = false;
      return newState;
    }

    case types.CHECK_USER_VIEW: {
      const newState = { ...state };
      newState.userView = action.payload.usuario;
      return newState;
    }

    case types.CLEAR_USER_VIEW: {
      const newState = { ...state };
      newState.userView = {};
      return newState;
    }

    default: {
      return state;
    }
  }
}
