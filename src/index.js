import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './containers/App1';
import { Provider } from 'react-redux'

import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App1 />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root') 
);


