import message from './message';

describe('message', ()=>{
	it('says hello to the name passed', ()=>{
		const name = 'Lola';
		expect(message(name)).toBe('Hello Lola')
	})
});