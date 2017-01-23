import { SUBMIT_LINE } from '../actions/actiontypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case SUBMIT_LINE:
      return [...state, action.value];
    default:
      return state;
  }
}
