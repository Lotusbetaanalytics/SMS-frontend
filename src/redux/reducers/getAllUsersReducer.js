import {
  TOTAL_STUDENT_REQUEST,
  TOTAL_STUDENT_SUCCESS,
  TOTAL_STUDENT_FAIL,
} from "../constants/getAllUserConstants";

export const totalStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case TOTAL_STUDENT_REQUEST:
      return { loading: true };
    case TOTAL_STUDENT_SUCCESS:
      return { loading: false, success: true, allStudent: action.payload };
    case TOTAL_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
