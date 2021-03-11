
import { history } from "../../routes";
import { toJS } from "mobx";

export let baseUrl = "http://localhost:8080/";




export const jsonParser = res => {
  if (res.status === 200 || res.status === 201) {
    return res.text().then(t => {
      try {
        return JSON.parse(t);
      } catch (e) {
        return [];
      }
    });
  } else if (res.status === 401 || res.status === 403) {
    history.push("login");
  } else {
    throw res;
  }
};

const secured = (url, params = {}) => {
  if (localStorage.apiToken && localStorage.apiToken !== "null") {
    params.headers = Object.assign({}, params.headers, {
      Authorization: `Bearer ${localStorage.apiToken}`
    });
  }
  return fetch(baseUrl + url, params);
};

export const get = (url, params = {}) => {
  params.method = "GET";
  return secured(url, params);
};

export const del = (url, params = {}) => {
  params.method = "DELETE";
  return secured(url, params);
};

export const post = (url, params = {}) => {
  params.method = "POST";
  params.headers = Object.assign({}, params.headers, {
    "Content-Type": "application/json"
  });
  params.body = JSON.stringify(toJS(params.body));
  return secured(url, params);
};

export const put = (url, params = {}) => {
  params.method = "PUT";
  params.headers = Object.assign({}, params.headers, {
    "Content-Type": "application/json"
  });
  params.body = JSON.stringify(toJS(params.body));
  return secured(url, params);
};

export const form = (url, params = {}) => {
  params.method = "POST";
  params.headers = Object.assign({}, params.headers, {
    "Content-Type": "application/x-www-form-urlencoded"
  });
  var pair = [];
  Object.keys(params.body).forEach(k => pair.push(k + "=" + params.body[k]));
  params.body = pair.join("&");
  return fetch(baseUrl + url, params);
};