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
import {
  totalStaffReducer,
  totalStudentReducer,
} from "./reducers/getAllUsersReducer";
import {
  getFacultyReducer,
  newFacultyReducer,
} from "./reducers/facultyReducer";
import { postNoticeReducer } from "./reducers/noticeBoardReducer";
import { getScopeReducer } from "./reducers/getScopeReducer";
import {
  createDepartmentReducer,
  getDepartmentReducer,
  postSpecilizationReducer,
} from "./reducers/departmentReducer";
import { getCourseReducer } from "./reducers/courseReducer";
import { getLevelReducer } from "./reducers/levelReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetail: userDetailsReducer,
  userforgetPassword: userForgotPasswordReducer,
  postNewStudent: createNewStudentReducer,
  postNewStaff: newStaffReducer,
  totalStudentNo: totalStudentReducer,
  totalStaffNo: totalStaffReducer,
  postNewFaculty: newFacultyReducer,
  noticeBoard: postNoticeReducer,
  scopeId: getScopeReducer,
  listFaculty: getFacultyReducer,
  departmentPost: createDepartmentReducer,
  departmentGet: getDepartmentReducer,
  courseGet: getCourseReducer,
  postSpecialization: postSpecilizationReducer,
  levelGet: getLevelReducer,
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
