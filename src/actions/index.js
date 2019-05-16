import axios from "axios";

// Action Types ----
// -----------------
export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILED = "FETCHING_FAILED";

// Action Creator---
// -----------------
export const getCharacters = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axios
    .get("https://swapi.co/api/people")
    .then(res => {
      // console.log(res);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCHING_FAILED,
        payload: `${err.response.status} ${err.response.statusText}`
      });
    });
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
