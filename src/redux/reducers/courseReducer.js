import {
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAIL,
  GET_SEMESTER_REQUEST,
  GET_SEMESTER_SUCCESS,
  GET_SEMESTER_FAIL,
  GET_SESSION_REQUEST,
  GET_SESSION_SUCCESS,
  GET_SESSION_FAIL,
  POST_COURSE_REQUEST,
  POST_COURSE_SUCCESS,
  POST_COURSE_FAIL,
  POST_COURSE_RESET,
  POST_ADDCOURSE_REQUEST,
  POST_ADDCOURSE_SUCCESS,
  POST_ADDCOURSE_FAIL,
  POST_ADDCOURSE_RESET,
} from "../constants/courseConstants";

export const getCourseReducer = (state = { getCourseArr: [] }, action) => {
  switch (action.type) {
    case GET_COURSE_REQUEST:
      return { loading: true };
    case GET_COURSE_SUCCESS:
      return {
        loading: false,
        success: true,
        getCourseId: action.payload,
      };
    case GET_COURSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postRegisterCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_COURSE_REQUEST:
      return { loading: true };
    case POST_COURSE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case POST_COURSE_FAIL:
      return { loading: false, error: action.payload };
    case POST_COURSE_RESET:
      return {};
    default:
      return state;
  }
};
export const postAddCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_ADDCOURSE_REQUEST:
      return { loading: true };
    case POST_ADDCOURSE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case POST_ADDCOURSE_FAIL:
      return { loading: false, error: action.payload };
    case POST_ADDCOURSE_RESET:
      return {};
    default:
      return state;
  }
};

export const getSemesterReducer = (state = { getSemesterArr: [] }, action) => {
  switch (action.type) {
    case GET_SEMESTER_REQUEST:
      return { loading: true };
    case GET_SEMESTER_SUCCESS:
      return {
        loading: false,
        success: true,
        getSemesterId: action.payload.results,
      };
    case GET_SEMESTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSessionReducer = (state = { getSessionArr: [] }, action) => {
  switch (action.type) {
    case GET_SESSION_REQUEST:
      return { loading: true };
    case GET_SESSION_SUCCESS:
      return {
        loading: false,
        success: true,
        getSessionId: action.payload.results,
      };
    case GET_SESSION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
