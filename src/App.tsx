import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';

import store, { persistor } from './store';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/GloabalStyles';

function App() {
  // eslint-disable-next-line func-names
  // window.onunload = function () {
  //   localStorage.removeItem('persist:TechSystem');
  //   return '';
  // };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
