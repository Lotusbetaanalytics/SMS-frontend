import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { confirmPasswordReducer, forgetPasswordReducer, lecturerconfirmPasswordReducer, lecturerforgetPasswordReducer, lecturerLoginReducer, studentLoginReducer } from "./Reducer/auth";
import { noticeReducer, studentDetailsReducer } from "./Reducer/studentReducer/studentReducer";
import { editProfileReducer, ProfilePictureReducer } from "./Reducer/Profile Reducer/profile";
import { questionsReducer, ResponseReducer } from "./Reducer/Test Reducer/testQuestion";
import { addCourseReducer, deleteCourseReducer } from "./Reducer/CourseReducer/courseReducer";
import { lecturerDetailsReducer } from "./Reducer/lecturer/lecturerDetail";
import { lecturerCoursesReducer } from "./Reducer/lecturer/lecturerCourse";
import { lecturerDeleteAssignmnetReducer, lecturerDeleteTestReducer, lecturerEditAssignmentReducer, lecturerEditAssignmenttakerByItIdReducer, lecturerEditTestReducer, lecturerGetAssignmentByCourseReducer, lecturerGetAssignmentByIdReducer, lecturerGetAssignmentByStaffIdReducer, lecturerGetAssignmenttakerByIdReducer, lecturerGetAssignmenttakerByItIdReducer, lecturerGetTestByCourseReducer, lecturerGetTestByIdReducer, lecturerGetTestBySourceReducer, lecturerGetTesttakerByIdReducer, lecturerPostAssignmentReducer } from "./Reducer/lecturer/lecturerAssesmentReducer";
import { lecturerDeleteNoticeReducer, lecturerEditNoticeReducer, lecturerGetNoticeByIdReducer, lecturerGetNoticeBySourceReducer, lecturerGetNoticeReducer, lecturerGetScopeReducer, lecturerPostNoticeReducer } from "./Reducer/lecturer/lecturerNotice";
import { lecturerGetStudentReducer } from "./Reducer/lecturer/lecturerGetStudent";
import { getAssignmentByStudentIdReducer, postAssignmentResponseReducer } from "./Reducer/studentAssignment/assignment";



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
  lecturerLogin: lecturerLoginReducer,
  lecturerForgetPassword: lecturerforgetPasswordReducer,
  lecturerConfirmpassword : lecturerconfirmPasswordReducer,
  lecturerDetails : lecturerDetailsReducer,
  lecturerCourse:lecturerCoursesReducer,
  lecturerPostAssignment: lecturerPostAssignmentReducer,
  lecturerPostNotice:lecturerPostNoticeReducer,
  lecturerGetScope:lecturerGetScopeReducer,
  lecturerGetNotice:lecturerGetNoticeReducer,
  lecturerEditNotice:lecturerEditNoticeReducer,
  lecturerDeleteNotice:lecturerDeleteNoticeReducer,
  lecturerGetNoticeById:lecturerGetNoticeByIdReducer,
  lecturerGetStudent: lecturerGetStudentReducer,
  displayPicture : ProfilePictureReducer,
  lecturerGetNoticeByScource : lecturerGetNoticeBySourceReducer,
  lecturerGetAssignmentByCourse : lecturerGetAssignmentByCourseReducer,
  lecturerGetAssignmentById : lecturerGetAssignmentByIdReducer,
  lecturerEditAssignment:lecturerEditAssignmentReducer,
  lecturerDeleteAssignment:lecturerDeleteAssignmnetReducer,
  lecturerGetTestByCourse : lecturerGetTestByCourseReducer,
  lecturerGetTestById : lecturerGetTestByIdReducer,
  lecturerEditTest:lecturerEditTestReducer,
  lecturerDeleteTest:lecturerDeleteTestReducer,
  getAssignmentByStudentId:getAssignmentByStudentIdReducer,
  postAssignmentResponse:postAssignmentResponseReducer,
  lecturerGetAssignmentByStaffID : lecturerGetAssignmentByStaffIdReducer,
  lecturerGetAssignmenttakerById : lecturerGetAssignmenttakerByIdReducer,
  lecturerGetAssignmenttakerByItId : lecturerGetAssignmenttakerByItIdReducer,
  lecturerEditAssignmenttaker :lecturerEditAssignmenttakerByItIdReducer,
  lectureGetTestBySource : lecturerGetTestBySourceReducer,
  lecturerGetTesttakerById : lecturerGetTesttakerByIdReducer,
  noticeById: noticeReducer
});

const userInfoFromStorage = localStorage.getItem("studentInfo")
  ? JSON.parse(localStorage.getItem("studentInfo"))
  : null;

  const lecturerInfoFromStorage = localStorage.getItem("lecturerInfo")
  ? JSON.parse(localStorage.getItem("lecturerInfo"))
  : null;

const initialState = {
  studentLogin: { userInfo: userInfoFromStorage },
  lecturerLogin: { userInfo: lecturerInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
