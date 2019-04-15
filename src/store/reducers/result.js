import * as actionTypes from "../actions";

const sstate = {
  results: []
};

const reducer = (state = sstate, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: Math.floor(Math.random() * 100000) + new Date(),
          value: action.result
        })
      };
    case actionTypes.DEL_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultELid
      );
      return {
        ...state,
        results: updatedArray
      };
    case "CLEAR":
      return { ...state, results: [] };

    default:
      break;
  }
  return state;
};
export default reducer;
