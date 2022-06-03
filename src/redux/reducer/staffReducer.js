import {
  NEWSTAFF_REQUEST,
  NEWSTAFF_SUCCESS,
  NEWSTAFF_FAIL,
  NEWSTAFF_RESET,
  DELETE_STAFFBYID_REQUEST,
  DELETE_STAFFBYID_SUCCESS,
  DELETE_STAFFBYID_FAIL,
  TOTAL_STAFF_REQUEST,
  TOTAL_STAFF_SUCCESS,
  TOTAL_STAFF_FAIL,
} from "../constants/staffConstant";

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

export const deleteStaffByIdReducer = (
  state = { deleteStaffById: [] },
  action
) => {
  switch (action.type) {
    case DELETE_STAFFBYID_REQUEST:
      return {
        ...state,
        deleteStaffById: state.deleteStaffById.filter(
          (x) => x.id !== action.payload.id
        ),
        loading: true,
      };
    case DELETE_STAFFBYID_SUCCESS:
      return {
        loading: false,
        success: true,
        deleteStaffs: action.payload,
      };
    case DELETE_STAFFBYID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const totalStaffReducer = (state = { allStaffs: [] }, action) => {
  switch (action.type) {
    case TOTAL_STAFF_REQUEST:
      return { loading: true };
    case TOTAL_STAFF_SUCCESS:
      return {
        loading: false,
        success: true,
        allStaff: action.payload.results,
      };
    case TOTAL_STAFF_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
