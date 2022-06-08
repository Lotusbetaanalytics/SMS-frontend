import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { confirmPasswordReducer, forgetPasswordReducer, studentLoginReducer } from "./Reducer/auth";
import { studentDetailsReducer } from "./Reducer/studentReducer/studentReducer";
import { editProfileReducer } from "./Reducer/Profile Reducer/profile";
import { questionsReducer, ResponseReducer } from "./Reducer/Test Reducer/testQuestion";
import { addCourseReducer, deleteCourseReducer } from "./Reducer/CourseReducer/courseReducer";



const reducer = combineReducers({
  studentLogin : studentLoginReducer,
  forgetPassword : forgetPasswordReducer,
  confirmpassword : confirmPasswordReducer,
  details : studentDetailsReducer,
  editProfile_: editProfileReducer,
  testQuestion : questionsReducer,
  testResponse : ResponseReducer,
  addCourse_: addCourseReducer,
  deleteCourse_ : deleteCourseReducer,
  
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
