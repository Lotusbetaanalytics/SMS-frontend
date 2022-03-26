import {
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAIL,
} from "../constants/courseConstants";

export const getCourseReducer = (state = { getCourseArr: [] }, action) => {
  switch (action.type) {
    case GET_COURSE_REQUEST:
      return { loading: true };
    case GET_COURSE_SUCCESS:
      return {
        loading: false,
        success: true,
        getCourseId: action.payload.results,
      };
    case GET_COURSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
