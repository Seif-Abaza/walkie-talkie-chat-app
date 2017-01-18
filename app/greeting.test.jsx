import React from 'react';
import { shallow } from 'enzyme'

import Greeting from './greeting';

describe('Greeting', ()=>{
	const greeting = shallow(<Greeting />);

	it('should greet the world', ()=>{
		expect(greeting.text()).toBe('I am greeting you.');
	});
});