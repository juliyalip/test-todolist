import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import { render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(
  <Provider store={store}>
  <App />
  </Provider>);
 
});

