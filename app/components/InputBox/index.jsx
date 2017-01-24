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
    this.lineSubmit = this.lineSubmit.bind(this);
    this.enterLineSubmit = this.enterLineSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  lineSubmit() {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  enterLineSubmit(event) {
    if (event.keyCode === 13) {
      this.lineSubmit();
    }
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.text}
          onChange={this.onChange}
          onKeyDown={this.enterLineSubmit}
        />
        <button onClick={this.lineSubmit}>Over!</button>
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
