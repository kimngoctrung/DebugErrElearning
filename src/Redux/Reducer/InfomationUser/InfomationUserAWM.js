import { INFOMATIONUSERREDUCER } from "../../Constant/UserEducation";

const initialState = {
  userInfo: [],
};

export const infomationUserAWM = (state = initialState, action) => {
  switch (action.type) {
    case INFOMATIONUSERREDUCER: {
      return { ...state, userInfo: action.data };
    }

    default:
      return state;
  }
};
