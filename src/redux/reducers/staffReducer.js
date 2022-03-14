import {
  NEWSTAFF_REQUEST,
  NEWSTAFF_SUCCESS,
  NEWSTAFF_FAIL,
  NEWSTAFF_RESET,
} from "../constants/staffConstants";

export const newStaffReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWSTAFF_REQUEST:
      return { loading: true };
    case NEWSTAFF_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case NEWSTAFF_FAIL:
      return { loading: false, error: action.payload };
    case NEWSTAFF_RESET:
      return {};
    default:
      return state;
  }
};
