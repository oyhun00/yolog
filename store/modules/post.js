import { createAction, handleActions } from 'redux-actions';

const TEST_EVENT = 'post/TEST_EVENT';

export const testEvent = createAction(TEST_EVENT, value => value);

const initialState = {
  num: 0
};

export default handleActions({
  [TEST_EVENT]: (state, action) => {
    console.log("111");
    return {
      ...state,
      num: state.num++
    }
  }
}, initialState)