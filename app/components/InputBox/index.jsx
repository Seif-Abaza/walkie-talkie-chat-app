import React from 'react';
import { connect } from 'react-redux';
import { submitLine } from '../../actions/actions';

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

const mapDispatchToProps = {
  onSubmit: submitLine,
};

export default connect(() => ({}), mapDispatchToProps)(InputBoxComponent);
