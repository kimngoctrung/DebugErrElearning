import { logInAction } from "../../Constant/getAPI";
import { ACCESS_TOKEN, USER_LOGIN } from "../../Constant/UserEducation";
let userLocalReal = "";

if (localStorage.getItem(USER_LOGIN)) {
  let userLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
  userLocalReal = userLocal;
}

const initialState = {
  userLogin: userLocalReal,
};

export const UserLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
