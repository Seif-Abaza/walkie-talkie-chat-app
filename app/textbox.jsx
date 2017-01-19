import React from 'react';
import Greeting from './greeting';

class TextBox extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.changeName} />
        <Greeting name={this.state.value || 'World'} />
      </div>
    );
  }
}

export default TextBox;
