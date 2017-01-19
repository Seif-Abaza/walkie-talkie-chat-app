import React from 'react';
import ReactDOM from 'react-dom';
import { InputBoxComponent } from './components/InputBox';

ReactDOM.render(<InputBoxComponent onSubmit={text => alert(text)} />, document.getElementById('root'));
