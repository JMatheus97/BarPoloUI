import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'
import { unregister } from "./registerServiceWorker";
import AuthenticationStore from "./services/stores/AuthenticationStore";
import Login from './components/Login/index';
import PageEstoque from './page/estoque';
import Mesa from './page/mesa';
import Comanda from './page/comanda';

export const Authentication = false;
export const history = createHistory();
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Authentication !== true ? <Component {...props} /> : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
  
    )} />
);

render(
  <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute exact path="/app" component={PageEstoque}/>
            <PrivateRoute exact path="/mesa" component={Mesa} />
            <PrivateRoute exact path="/comanda-mesa" component={Comanda} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
unregister();
