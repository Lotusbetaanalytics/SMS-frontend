import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  confirmPasswordReducer,
  userDetailsReducer,
  userForgotPasswordReducer,
  userLoginReducer,
} from "./reducers/userReducer";
import {
  createNewStudentReducer,
  deleteStudentByIdReducer,
} from "./reducers/createStudentReducer";
import {
  deleteStaffByIdReducer,
  newStaffReducer,
} from "./reducers/staffReducer";
import {
  totalStaffReducer,
  totalStudentReducer,
} from "./reducers/getAllUsersReducer";
import {
  getFacultyReducer,
  newFacultyReducer,
} from "./reducers/facultyReducer";
import {
  getNoticeReducer,
  informationImageReducer,
  postInformationReducer,
  postNoticeReducer,
} from "./reducers/noticeBoardReducer";
import {
  getInfoImageReducer,
  getScopeReducer,
} from "./reducers/getScopeReducer";
import {
  createDepartmentReducer,
  getDepartmentReducer,
  getSpecializationReducer,
  postSpecilizationReducer,
} from "./reducers/departmentReducer";
import {
  getCourseReducer,
  getSemesterReducer,
  getSessionReducer,
  postAddCourseReducer,
  postRegisterCourseReducer,
} from "./reducers/courseReducer";
import { getLevelReducer } from "./reducers/levelReducer";
import {
  postAcademicDataReducer,
  postFamilyDataReducer,
  postHealthDataReducer,
  postUserDataReducer,
} from "./reducers/usersDataReducer";
import { editStudentByIdReducer } from "./reducers/editUserDetailsReducers";
import { getStudentByIdReducer } from "./reducers/getUserIdReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetail: userDetailsReducer,
  userforgetPassword: userForgotPasswordReducer,
  passwordConfirmed: confirmPasswordReducer,
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
  postSpecializations: postSpecilizationReducer,
  levelGet: getLevelReducer,
  getSpecilize: getSpecializationReducer,
  semesterGet: getSemesterReducer,
  sessionGet: getSessionReducer,
  postCourse: postRegisterCourseReducer,
  postNewCourse: postAddCourseReducer,
  postBioDataInfo: postUserDataReducer,
  postAcademic: postAcademicDataReducer,
  postHealth: postHealthDataReducer,
  postFamily: postFamilyDataReducer,
  deleteStudentId: deleteStudentByIdReducer,
  deleteStaffId: deleteStaffByIdReducer,
  noticeGet: getNoticeReducer,
  editStudent: editStudentByIdReducer,
  getStudentId: getStudentByIdReducer,
  postImageInfo: informationImageReducer,
  postInfo: postInformationReducer,
  getInfoImage: getInfoImageReducer,
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
