import React from 'react';
import { shallow } from 'enzyme'

import { InputBoxComponent }  from './index';

describe('<InputBox/>', () => {
	const NoOp = () => {};

	it( 'renders an text area', () => {
		const inputBox = shallow(<InputBoxComponent onSubmit={NoOp} />);
		expect(inputBox.find('textarea')).toHaveLength(1);
	});

	it( 'renders a submit button', () => {
		const inputBox = shallow(<InputBoxComponent onSubmit={NoOp} />);
		expect(inputBox.find('button')).toHaveLength(1);	
	});

	it( 'calls passed function on pressing submit button', () => {
		const submit = jest.fn();
		const inputBox = shallow(<InputBoxComponent onSubmit={submit} />);
		
		inputBox.find('textarea').simulate('change', { target: {value: 'hello'}});
		inputBox.find('button').simulate('click');

		expect(submit.mock.calls).toHaveLength(1);
		expect(submit.mock.calls[0]).toEqual(['hello']);
	} );

	it( 'calls passed function on pressing enter', () => {
		const submit = jest.fn();
		const inputBox = shallow(<InputBoxComponent onSubmit={submit} />);
		const event = new KeyboardEvent('keydown', {'keyCode': 13});
		
		inputBox.find('textarea').simulate('change', { target: {value: 'hello'}});
		inputBox.find('textarea').simulate('keyDown', event);

		expect(submit.mock.calls).toHaveLength(1);
		expect(submit.mock.calls[0]).toEqual(['hello']);
	} );

	it('clears textarea after submitting', () => {
		const submit = jest.fn();
		const inputBox = shallow(<InputBoxComponent onSubmit={submit} />);
		
		inputBox.find('textarea').simulate('change', { target: {value: 'hello'}});
		inputBox.find('button').simulate('click');

		expect(inputBox.find('textarea').props().value).toEqual('');
	})


});