import { extendObservable, action } from "mobx";
import i_ from "i18next";


import { get, form, post, jsonParser } from "../utils/Cliente";
import {history} from '../../index';

class AuthenticationStore {
  constructor() {
    extendObservable(this, {
      isAuthenticated: false,

      me: {},

      schemas: [],

      testAuthenticated: action(() =>
        get("me")
          .then(res => {
            if (res.status === 401 || res.status === 403) {
              this.isAuthenticated = false;
              history.push("login");
              return Promise.reject();
            } else {
              this.isAuthenticated = true;
              return res;
            }
          })
          .then(jsonParser)
          .then(data => (this.me = data))
      ),

      login: action((username, password) =>
        form("login", {
          body: { username, password }
        })
          .then(res => {
            if (res.status === 403 || res.status === 500) {
              this.isAuthenticated = false;
              localStorage.apiToken = null;
              this.user = {};
              return Promise.reject(i_.t("errors.bad-credentials"));
            } else {
              return  this.isAuthenticated = true;
              
            }
          })
          .then(data => {
            this.me = data.user;
            localStorage.apiToken = data.token;
          }),
        
      ),

      register: action((nome, email, password) =>
        post("register", {
          body: { nome, email, password },
          credentials: "omit"
        }).then(res => this.login(email, password))
      ),

      logout: action(() =>
        post("logout").then(res => {
          this.isAuthenticated = false;
          this.user = {};
          localStorage.clear();
        })
      ),
      hasRole: action(
        role =>
          this.me.perfil &&
          this.me.perfil.autorizacoes.filter(a => a.nome === role).length > 0
      )
    });
  }
}

export default new AuthenticationStore();
