import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { additionReducer } from "./AdditionReducer/AdditionReducer";
import { changeCouresReducer } from "./Reducer/ChangeCoures/ChangeCouresReducer";
import { CouresReducer } from "./Reducer/CouresReducer/CouresReducer";
import { GetIDCoures } from "./Reducer/GetIDCoures/GetIDCoures";
import { infomationUserAWM } from "./Reducer/InfomationUser/InfomationUserAWM";
import { registerWithIDOfUserRe } from "./Reducer/RegisterWithIDOfUser/RegisterWithIDOfUser";
import { SearchReducer } from "./Reducer/SearchReducer/SearchReducer";
import { stuRegisYetReducer } from "./Reducer/StuRegisYetReducer/StuRegisYetReducer";
import { UserLoginReducer } from "./Reducer/UserLogin/UserReducerLogin";
const rootReducer = combineReducers({
  CouresReducer: CouresReducer,
  UserLoginReducer: UserLoginReducer,
  infomationUserAWM: infomationUserAWM,
  SearchReducer: SearchReducer,
  additionReducer: additionReducer,
  GetIDCoures: GetIDCoures,
  changeCouresReducer: changeCouresReducer,
  stuRegisYetReducer: stuRegisYetReducer,
  registerWithIDOfUserRe: registerWithIDOfUserRe,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
