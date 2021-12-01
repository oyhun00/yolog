const SET_HEADER_SELECTED_KEYS = 'util/SET_HEADER_SELECTED_KEY';

export const selectedKeys = () => ({
  type: SET_HEADER_SELECTED_KEYS
});

const initialState = {
  key: 0
};

const util = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_SELECTED_KEYS:
      console.log("!23")
      return {
        ...state,
        key: state.key
      }
    default:
      return state;
  }
}

export default util;