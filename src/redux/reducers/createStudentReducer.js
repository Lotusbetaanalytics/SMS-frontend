import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_RESET,
  DELETE_STUDENTBYID_REQUEST,
  DELETE_STUDENTBYID_SUCCESS,
  DELETE_STUDENTBYID_FAIL,
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

export const deleteStudentByIdReducer = (
  state = { deleteStudentById: [] },
  action
) => {
  switch (action.type) {
    case DELETE_STUDENTBYID_REQUEST:
      return {
        ...state,
        deleteStudentById: state.deleteStudentById.filter(
          (x) => x.id !== action.payload.id
        ),
        loading: true,
      };
    case DELETE_STUDENTBYID_SUCCESS:
      return {
        loading: false,
        success: true,
        deleteStudents: action.payload,
      };
    case DELETE_STUDENTBYID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
