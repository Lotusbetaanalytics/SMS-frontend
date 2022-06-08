import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  confirmPasswordReducer,
  userDetailsReducer,
  userForgotPasswordReducer,
  userLoginReducer,
} from "./reducer/userReducer";
import {
  getNoticeReducer,
  postNoticeReducer,
} from "./reducer/noticeBoardReducer";
import {
  getSpecializationReducer,
  postAcademicDataReducer,
  postFamilyDataReducer,
  postHealthDataReducer,
  postUserDataReducer,
} from "./reducer/userProfileDataReducer";
import { newStaffReducer, totalStaffReducer } from "./reducer/staffReducer";
import {
  createNewStudentReducer,
  deleteStudentByIdReducer,
  totalStudentReducer,
} from "./reducer/studentReducer";
import { getFacultyReducer, newFacultyReducer } from "./reducer/facultyReducer";
import {
  createDepartmentReducer,
  getDepartmentReducer,
} from "./reducer/departmentReducer";
import {
  getCourseReducer,
  postAddCourseReducer,
} from "./reducer/courseReducer";
import { getScopeReducer } from "./reducer/scopeReducer";
import { editUserProfileReducer } from "./reducer/editUserProfileReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetail: userDetailsReducer,
  forgetPassword: userForgotPasswordReducer,
  confirmPassword: confirmPasswordReducer,
  noticeGet: getNoticeReducer,
  postBioDataInfo: postUserDataReducer,
  postNewStaff: newStaffReducer,
  getSpecilize: getSpecializationReducer,
  totalStaffNo: totalStaffReducer,
  postNewStudent: createNewStudentReducer,
  totalStudentNo: totalStudentReducer,
  postAcademic: postAcademicDataReducer,
  postHealth: postHealthDataReducer,
  postFamily: postFamilyDataReducer,
  postNewFaculty: newFacultyReducer,
  listFaculty: getFacultyReducer,
  departmentPost: createDepartmentReducer,
  departmentGet: getDepartmentReducer,
  courseGet: getCourseReducer,
  postNewCourse: postAddCourseReducer,
  noticeBoard: postNoticeReducer,
  scopeId: getScopeReducer,
  editProfileUser: editUserProfileReducer,
  deleteStudentId: deleteStudentByIdReducer,
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
