import React from 'react';
import { shallow } from 'enzyme';
import { ConversationComponent } from './index.jsx';

describe('<Conversation />', () => {
	it ('display a message', () => {
		const conversation = shallow(<ConversationComponent messages={['Let us write something here']} />);
		expect(conversation.text()).toContain('Let us write something here')
	});

	it ('displays two messages', () => {
		const messages = ['Let us write something here', 'I would probably want to extract this into a constant'];
		const conversation = shallow(<ConversationComponent messages={ messages } />);
		expect(conversation.text()).toContain(messages[0]);
		expect(conversation.text()).toContain(messages[1]);
	});
});
