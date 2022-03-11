import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userDetailsReducer,
  userForgotPasswordReducer,
  userLoginReducer,
} from "./reducers/userReducer";
import { createNewStudentReducer } from "./reducers/createStudentReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userforgetPassword: userForgotPasswordReducer,
  postNewStudent: createNewStudentReducer,
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
