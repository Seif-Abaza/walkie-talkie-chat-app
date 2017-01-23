import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import InputBox from './components/InputBox';
import Conversation from './components/Conversation';

function reducer(state, action) {
  console.log(state);
  console.log(action);
  return state;
}

const store = createStore(
  reducer,
  { messages: ['Go on', 'Type Something in the Box'] },
);

render(
  <Provider store={store}>
    <div>
      <Conversation />
      <InputBox />
    </div>
  </Provider>,

  document.getElementById('root'),
);
