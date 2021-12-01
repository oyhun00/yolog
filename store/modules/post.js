const TEST_EVENT = 'post/TEST_EVENT';

export const testEvent = () => ({
  type: TEST_EVENT
});

const initialState = {
  num: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_EVENT:
      return {
        ...state,
        num: state.num + 1
      }
    default:
      return state;
  }
};

export default reducer;