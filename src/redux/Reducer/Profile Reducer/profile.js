import { EDITPROFILE_FAIL, EDITPROFILE_REQUEST, EDITPROFILE_RESET, EDITPROFILE_SUCCESS, PROFILE_PICTURE_FAIL, PROFILE_PICTURE_REQUEST, PROFILE_PICTURE_RESET, PROFILE_PICTURE_SUCCESS } from "../../Constants/ProfileConstants/profileConstants";


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

export const ProfilePictureReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_PICTURE_REQUEST:
      return { loading: true };
    case PROFILE_PICTURE_SUCCESS:
      return { loading: false,success: true,profilePicture:action.payload };
    case PROFILE_PICTURE_FAIL:
      return { loading: false, error: action.payload,success:false };
    case PROFILE_PICTURE_RESET:
      return {};
    default:
      return state;
  }
};

