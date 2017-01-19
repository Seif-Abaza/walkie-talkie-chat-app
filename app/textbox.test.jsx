import React from 'react';
import { shallow, mount } from 'enzyme'

import TextBox from './textbox';

describe('<TextBox/>', () => {
	it( 'renders an input', () => {
		const textBox = shallow(<TextBox />);
		expect(textBox.find('input')).toHaveLength(1);
	});

	it('renders the <Greeting />', () => {
		const textBox = shallow(<TextBox />);
		expect(textBox.find('Greeting')).toHaveLength(1);
	});

	it('should display hello world when input field is empty', () => {
		const textBox = shallow(<TextBox />);
		expect(textBox.find('Greeting').props().name).toBe('World');
	});

	it('displays input in greeting', () => {
		const textBox = shallow(<TextBox />);
		const name = 'Emily';
		textBox.find('input').simulate('change', { target: { value: name }});
		expect(textBox.find('Greeting').props().name).toBe(name);
	});
});