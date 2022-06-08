import {
  EDIT_USERPROFILE_REQUEST,
  EDIT_USERPROFILE_SUCCESS,
  EDIT_USERPROFILE_FAIL,
} from "../constants/editUserProfileConstant";

export const editUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_USERPROFILE_REQUEST:
      return { loading: true };
    case EDIT_USERPROFILE_SUCCESS:
      return { loading: false, success: true, editUserProfile: action.payload };
    case EDIT_USERPROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
