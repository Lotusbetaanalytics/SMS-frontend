import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_RESET,
  TOTAL_STUDENT_REQUEST,
  TOTAL_STUDENT_SUCCESS,
  TOTAL_STUDENT_FAIL,
} from "../constants/studentConstant";

export const createNewStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STUDENT_REQUEST:
      return { loading: true };
    case CREATE_STUDENT_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case CREATE_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_STUDENT_RESET:
      return {};
    default:
      return state;
  }
};

export const totalStudentReducer = (state = { allStudents: [] }, action) => {
  switch (action.type) {
    case TOTAL_STUDENT_REQUEST:
      return { loading: true };
    case TOTAL_STUDENT_SUCCESS:
      return {
        loading: false,
        success: true,
        allStudent: action.payload.results,
      };
    case TOTAL_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
