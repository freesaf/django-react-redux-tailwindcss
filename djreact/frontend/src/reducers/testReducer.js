import { ACTION_TYPE } from "../actions/types";

const INITIAL_STATE = {
  val: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return { ...state, val: action.payload };
    default:
      return state;
  }
};
