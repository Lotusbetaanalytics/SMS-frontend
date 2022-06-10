import { ADD_COURSE_FAIL, ADD_COURSE_REQUEST, ADD_COURSE_RESET, ADD_COURSE_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_RESET, DELETE_COURSE_SUCCESS } from "../../Constants/courseRegisteration/courseRegisteration";

export const addCourseReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_COURSE_REQUEST:
        return { loading: true };
      case ADD_COURSE_SUCCESS:
        return { loading: false, success: true, courses: action.payload };
      case ADD_COURSE_FAIL:
        return { loading: false, error: action.payload,success:false };
        case ADD_COURSE_RESET:
        return {};
      default:
        return state;
    }
  };

export const deleteCourseReducer = (
    state = { courses: [] }, action
  ) => {
    switch (action.type) {
      case DELETE_COURSE_REQUEST:
        return {
          ...state,
           courses: state.courses.filter((x) => x.id !== action.payload),
          loading: true,
        };
      case DELETE_COURSE_SUCCESS:
        return {
          loading: false,
          success: true,
          deleteCourse: action.payload,
        };
      case DELETE_COURSE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
        case DELETE_COURSE_RESET:
            return {};
      default:
        return state;
    }
  };