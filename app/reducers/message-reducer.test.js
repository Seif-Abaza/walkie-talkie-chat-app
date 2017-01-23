import reducer from './message-reducer';
import { submitLine } from '../actions/actions';

describe('message reducer', () => {
	describe('on init', () => {
		it('initializes messages to an empty array', () => {
			const messageState = reducer(undefined, { type: "init" });
			expect(messageState).toEqual([]);
		});
	});
	describe('on submit line action', () => {
		it('adds a message to the message array', () => {
			const oldMessageState = ['first']
			const action = submitLine('second');

			const messageState = reducer( oldMessageState, action);
			expect(messageState).toEqual(['first', 'second']);
		})
	})
	
})