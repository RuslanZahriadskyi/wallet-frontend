import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
    {/* <PersistGate loading={null}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
