import {
  USERAVAILABLEIDCONSTANT,
  USERCANCELWITHID,
  USERCONFIRMWAITINGWITHID,
  USERCORFIMWITHID,
  USERNOTYETIDCONSTANT,
  USERWAITINGTOACCEPTIDCONSTANT,
} from "../../Constant/regisUserWithID";

const initialState = {
  userNotYetWithID: [],
  useravailableWithID: [],
  userWaitingWithID: [],
};

export const registerWithIDOfUserRe = (state = initialState, action) => {
  switch (action.type) {
    case USERNOTYETIDCONSTANT: {
      return { ...state, userNotYetWithID: action.data };
    }
    case USERAVAILABLEIDCONSTANT: {
      return { ...state, useravailableWithID: action.data };
    }
    case USERWAITINGTOACCEPTIDCONSTANT: {
      return { ...state, userWaitingWithID: action.data };
    }
    case USERCORFIMWITHID: {
      const userNotYetWithIDUpdate = [...state.userNotYetWithID];
      let index = userNotYetWithIDUpdate?.findIndex(
        (item) => item.maKhoaHoc === action.data
      );
      if (index !== -1) {
        userNotYetWithIDUpdate.splice(index, 1);
        return { ...state, userNotYetWithID: userNotYetWithIDUpdate };
      }
    }
    case USERCONFIRMWAITINGWITHID: {
      const userWaitingWithIDUpdate = [...state.userWaitingWithID];
      let index = userWaitingWithIDUpdate?.findIndex(
        (item) => item.maKhoaHoc === action.data
      );
      if (index !== -1) {
        userWaitingWithIDUpdate.splice(index, 1);
        return { ...state, userWaitingWithID: userWaitingWithIDUpdate };
      }
    }
    case USERCANCELWITHID: {
      const useravailableWithIDUpdate = [...state.useravailableWithID];
      let index = useravailableWithIDUpdate?.findIndex(
        (item) => item.maKhoaHoc === action.data
      );
      if (index !== -1) {
        useravailableWithIDUpdate.splice(index, 1);
        return { ...state, useravailableWithID: useravailableWithIDUpdate };
      }
    }
    default:
      return state;
  }
};
