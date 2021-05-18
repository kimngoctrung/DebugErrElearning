import { SEARCH_USER } from "../../Constant/ModelManager";

const initialState = {
  arrUser: [],
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER: {
      console.log(action.data);
      return { ...state, arrUser: action.data };
    }

    default:
      return state;
  }
};
