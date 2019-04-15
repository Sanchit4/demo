import * as actionTypes from "../actions";

let sstate = {
  counter: 0,
  zero: 0
};

const reducer = (state = sstate, action) => {
  switch (action.type) {
    case actionTypes.INC:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DEC:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionTypes.SUB:
      return {
        ...state,
        counter: state.counter - action.val
      };
    case "RESET":
      return {
        ...state,
        counter: state.zero
      };
    default:
      break;
  }
  return state;
};
export default reducer;
