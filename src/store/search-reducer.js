import {searchAPI} from "../api/config";

const initState = {
  items: [],
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case 'search/SET-RESULT':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export const setAppStatusAC = (payload) =>
  ({ type: 'search/SET-RESULT', payload });

export const getSearchTC = () =>
  async (dispatch) => {
    try {
      const res = await searchAPI.get();
      dispatch(setAppStatusAC(res.items));
    } catch (e) {
      console.log(e)
    }
  };