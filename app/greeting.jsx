import React from 'react';

// export default
class Greeting extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <h1>Hello {name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: React.PropTypes.string,
};
Greeting.defaultProps = {
  name: 'World',
};

export default Greeting;
