import {
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_RESET,
} from "../constants/createStudentConstants";

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
