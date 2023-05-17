import { Switch } from 'react-router-dom';
import MyRoute from './Myroute';

import Page404 from '../page/Page404';
import { Stock } from '../page/Stock';
import { Tables } from '../page/Table';
import Comandas from '../page/Commands';
import { Login } from '../page/Login';
import { Home } from '../page/Home';
import { Product } from '../page/Product';
import { Store } from '../page/Store';

export default function Routes() {
  return (
    <Switch>
      <MyRoute excat path="/login" component={Login} />
      <MyRoute excat path="/product" component={Product} isClosed />
      <MyRoute exact path="/stock" component={Stock} isClosed />
      <MyRoute exact path="/table" component={Tables} isClosed />
      <MyRoute exact path="/store" component={Store} isClosed />
      <MyRoute excat path="/" component={Home} isClosed />
      <MyRoute exact path="/comanda-mesa" component={Comandas} isClosed />
      <MyRoute path="*" component={Page404} isClosed />
    </Switch>
  );
}
