import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { InputBoxComponent } from './components/InputBox';

function reducer(state) {
  return state;
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <InputBoxComponent onSubmit={text => alert(text)} />
  </Provider>,

  document.getElementById('root'),
);
