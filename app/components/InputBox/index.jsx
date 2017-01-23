import React from 'react';
import { connect } from 'react-redux';

export class InputBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <textarea onChange={this.onChange} />
        <button onClick={() => this.props.onSubmit(this.state.text)}>Over!</button>
      </div>
    );
  }
}

InputBoxComponent.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

function mapStateToProps() {}
function mapDispatchToProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(InputBoxComponent);
