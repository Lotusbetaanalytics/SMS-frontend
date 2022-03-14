import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userDetailsReducer,
  userForgotPasswordReducer,
  userLoginReducer,
} from "./reducers/userReducer";
import { createNewStudentReducer } from "./reducers/createStudentReducer";
import { newStaffReducer } from "./reducers/staffReducer";
import { totalStudentReducer } from "./reducers/getAllUsersReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetail: userDetailsReducer,
  userforgetPassword: userForgotPasswordReducer,
  postNewStudent: createNewStudentReducer,
  postNewStaff: newStaffReducer,
  totalStudentNo: totalStudentReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // adminLogin: { adminInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
