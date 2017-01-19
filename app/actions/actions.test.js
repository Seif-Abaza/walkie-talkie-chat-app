import * as actions from './actions';
import { SUBMIT_LINE } from './actiontypes';

describe('actions', () => {
	describe('submitLine action', () => {
		const text_value = 'hello'
		it('returns submit line action', () => {
			const action = actions.submitLine(text_value);
			expect(action.type).toEqual(SUBMIT_LINE);
		});
		it('returns value of textarea', () => {
			const action = actions.submitLine(text_value);
			expect(action.value).toEqual('hello');
		})

	});
});