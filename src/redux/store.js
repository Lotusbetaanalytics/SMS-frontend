import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { editProfileReducer, forgetPasswordReducer, noticeReducer, studentDetailsReducer, studentLoginReducer } from "./studentReducer/studentReducer";

const reducer = combineReducers({
  details: studentDetailsReducer,
  studentLogin : studentLoginReducer,
  forgetPassword : forgetPasswordReducer,
  editProfile_ : editProfileReducer,
  notice: noticeReducer
});

const userInfoFromStorage = localStorage.getItem("studentInfo")
  ? JSON.parse(localStorage.getItem("studentInfo"))
  : null;

const initialState = {
  studentLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
