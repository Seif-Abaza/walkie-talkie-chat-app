import React from 'react';
import { shallow } from 'enzyme'

import Greeting from './greeting';

describe('Greeting', ()=>{
	it('should greet the world', ()=>{
		const greeting = shallow(<Greeting />);
		expect(greeting.text()).toBe('Hello World');
	});
	it('should greet the someone', ()=>{
		const greeting = shallow(<Greeting name="someone"/>);
		expect(greeting.text()).toBe('Hello someone');
	});

});