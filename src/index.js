import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// redux:
import store from './store/store.js';
// provider:
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

const mapStateToProps = state => {
  return {
    user: state
  };
};