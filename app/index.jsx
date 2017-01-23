import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { InputBoxComponent } from './components/InputBox';
import Conversation from './components/Conversation';

function reducer(state) {
  return state;
}

const store = createStore(
  reducer,
  { messages: ['jkdsgk', 'jdshfkgjk'] },
  applyMiddleware(reduxLogger),
);

render(
  <Provider store={store}>
    <div>
      <Conversation />
      <InputBoxComponent onSubmit={text => alert(text)} />
    </div>
  </Provider>,

  document.getElementById('root'),
);
