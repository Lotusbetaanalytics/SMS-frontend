import {
  GET_STUDENTBYID_REQUEST,
  GET_STUDENTBYID_SUCCESS,
  GET_STUDENTBYID_FAIL,
} from "../constants/getUserIdConstants";

export const getStudentByIdReducer = (
  state = { getStudentById: [] },
  action
) => {
  switch (action.type) {
    case GET_STUDENTBYID_REQUEST:
      return { ...state, loading: true };
    case GET_STUDENTBYID_SUCCESS:
      return {
        loading: false,
        success: true,
        getStudentById: action.payload.user,
      };
    case GET_STUDENTBYID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
