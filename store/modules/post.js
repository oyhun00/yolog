import { createAction, handleActions } from 'redux-actions';

const TEST_EVENT = 'post/TEST_EVENT';

export const testEvent = () => ({
  type: TEST_EVENT
});

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_EVENT:
      return state + 1;
    default:
      return state 
  }
};

export default reducer;