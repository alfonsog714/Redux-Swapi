import { FETCHING_START, FETCHING_FAILED, FETCHING_SUCCESS } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        characters: action.payload
      };

    case FETCHING_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
