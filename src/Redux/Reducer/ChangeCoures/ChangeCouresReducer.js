import { CHANGECOURESCONSTANT } from "../../Constant/ChangeCouresConstant";

const initialState = {
  changeCoures: {},
};

export const changeCouresReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGECOURESCONSTANT: {
      return { ...state, changeCoures: action.coures };
    }
    default:
      return state;
  }
};
