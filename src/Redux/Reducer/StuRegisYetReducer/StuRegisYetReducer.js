import {
  USERAVAILABLECONSTANT,
  USERNOTYETCONSTANT,
  USERWAITINGTOACCEPTCONSTANT,
  USER_CONFIRM,
  USER_CANCEL,
  USER_CONFIRM_WAITING,
} from "../../Constant/userNotYetConstant";

const initialState = {
  userNotYet: [],
  useravailable: [],
  userWaiting: [],
};

export const stuRegisYetReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERNOTYETCONSTANT: {
      return { ...state, userNotYet: action.data };
    }
    case USERAVAILABLECONSTANT: {
      return { ...state, useravailable: action.data2 };
    }
    case USER_CONFIRM: {
      const userNotYetUpdate = [...state.userNotYet];
      let index = userNotYetUpdate?.findIndex(
        (item) => item.taiKhoan === action.data
      );
      if (index !== -1) {
        userNotYetUpdate.splice(index, 1);
        return { ...state, userNotYet: userNotYetUpdate };
      }
    }
    case USER_CANCEL: {
      const userAvaiableUpdate = [...state.useravailable];
      let index = userAvaiableUpdate?.findIndex(
        (item) => item.taiKhoan === action.data
      );
      if (index !== -1) {
        userAvaiableUpdate.splice(index, 1);
        return { ...state, useravailable: userAvaiableUpdate };
      }
    }
    case USERWAITINGTOACCEPTCONSTANT: {
      return { ...state, userWaiting: action.data2 };
    }
    case USER_CONFIRM_WAITING: {
      const userWaitingUpdate = [...state.userWaiting];
      let index = userWaitingUpdate?.findIndex(
        (item) => item.taiKhoan === action.data
      );
      if (index !== -1) {
        userWaitingUpdate.splice(index, 1);
        return { ...state, userWaiting: userWaitingUpdate };
      }
    }
    default:
      return state;
  }
};
