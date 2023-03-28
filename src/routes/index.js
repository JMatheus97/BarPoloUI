import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './Myroute';
import Page404 from '../page/Page404';
import Stock from '../page/Stock';
import Mesa from '../page/Mesa';
import Comandas from '../page/Commands';
import Login from '../page/Login';
import Home from '../page/Home';

export default function Routes() {
  return (
    <Switch>
      <MyRoute excat path="/login" component={Login} />
      <MyRoute excat path="/" component={Home} isClosed />
      <MyRoute exact path="/app" component={Stock} isClosed />
      <MyRoute exact path="/mesa" component={Mesa} isClosed />
      <MyRoute exact path="/comanda-mesa" component={Comandas} isClosed />
      <MyRoute path="*" component={Page404} isClosed />
    </Switch>
  );
}
