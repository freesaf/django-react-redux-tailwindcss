import { ACTION_TYPE } from "./types";

export const increaseCount = (val) => {
  return {
    type: ACTION_TYPE,
    payload: val,
  };
};
