import { EDITPROFILE_FAIL, EDITPROFILE_REQUEST, EDITPROFILE_RESET, EDITPROFILE_SUCCESS } from "../../Constants/ProfileConstants/profileConstants";


export const editProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case EDITPROFILE_REQUEST:
      return { loading: true };
    case EDITPROFILE_SUCCESS:
      return { loading: false,success: true,studentDetail:action.payload };
    case EDITPROFILE_FAIL:
      return { loading: false, error: action.payload,success:false };
    case EDITPROFILE_RESET:
      return {};
    default:
      return state;
  }
};

