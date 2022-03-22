import {
  CREATE_FACULTY_REQUEST,
  CREATE_FACULTY_SUCCESS,
  CREATE_FACULTY_FAIL,
  CREATE_FACULTY_RESET,
} from "../constants/facultyConstants";

export const newFacultyReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_FACULTY_REQUEST:
      return { loading: true };
    case CREATE_FACULTY_SUCCESS:
      return { loading: false, success: true, faculty: action.payload };
    case CREATE_FACULTY_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_FACULTY_RESET:
      return {};
    default:
      return state;
  }
};
