import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import InputBox from './components/InputBox';
import Conversation from './components/Conversation';
import rootReducer from './reducers/root-reducer';

const store = createStore(
  rootReducer,
  { messages: ['Go on', 'Type Something in the Box'] },
  applyMiddleware(reduxLogger()),
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
