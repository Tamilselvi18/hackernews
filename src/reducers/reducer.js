import initVal from '../utils/initVal';
const reducer = (state = initVal, action) => {
  switch (action.type) {
    case 'HACKER_NEWS':
      state = { ...state, data: action.payload };
      break;
    case 'HIDE_COMMENT':
      state = { ...state, data: action.payload };
      break;
    case 'UP_VOTE':
      state = { ...state, data: action.payload };
      break;
    default:
      state = { ...state };
  }
  return state;
};

export default reducer;
