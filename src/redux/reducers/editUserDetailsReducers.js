import {
  EDIT_STUDENTBYID_REQUEST,
  EDIT_STUDENTBYID_SUCCESS,
  EDIT_STUDENTBYID_FAIL,
} from "../constants/editUserDetailsConstants";

export const editStudentByIdReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case EDIT_STUDENTBYID_REQUEST:
      return {
        ...state,
        students: state.students.filter((x) => x.id === action.payload),
        loading: true,
      };
    case EDIT_STUDENTBYID_SUCCESS:
      return {
        loading: false,
        success: true,
        editStudentId: action.payload,
      };
    case EDIT_STUDENTBYID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
