import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PlayGameContainer from './containers/PlayGameContainer';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <PlayGameContainer />
  </Provider>,
  document.getElementById('root')
);
