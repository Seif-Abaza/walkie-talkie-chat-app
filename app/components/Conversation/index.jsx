import React from 'react';
import { connect } from 'react-redux';
import stringHash from 'string-hash';

export class ConversationComponent extends React.Component {

  render() {
    return (
      <div>
        {this.props.messages.map(message => <p key={stringHash(message)}>{message}</p>)}
      </div>);
  }
}

ConversationComponent.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

function mapStateToProps(state) {
  const messages = state.messages || [];
  return { messages };
}

export default connect(mapStateToProps)(ConversationComponent);
