import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import AuthenticationStore from "./services/stores/AuthenticationStore";

import Login from './components/Login/index';
import PageEstoque from './page/estoque';
console.log(AuthenticationStore.isAuthenticated)

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        AuthenticationStore.isAuthenticated === true ? <Component {...props} /> : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    
      )} />
);

export const history = createBrowserHistory();

const Routes = () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute exact path="/app" component={PageEstoque}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;