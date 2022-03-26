import {
  TOTAL_STUDENT_REQUEST,
  TOTAL_STUDENT_SUCCESS,
  TOTAL_STUDENT_FAIL,
  TOTAL_STAFF_REQUEST,
  TOTAL_STAFF_SUCCESS,
  TOTAL_STAFF_FAIL,
} from "../constants/getAllUserConstants";

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
export const totalStaffReducer = (state = { allStaffs: [] }, action) => {
  switch (action.type) {
    case TOTAL_STAFF_REQUEST:
      return { loading: true };
    case TOTAL_STAFF_SUCCESS:
      return { loading: false, success: true, allStaff: action.payload };
    case TOTAL_STAFF_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
