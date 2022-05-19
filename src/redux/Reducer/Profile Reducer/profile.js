import { CONFIRM_PASSWORD_FAIL,CONFIRM_PASSWORD_SUCCESS,CONFIRM_PASSWORD_REQUEST,EDITPROFILE_RESET, EDITPROFILE_FAIL, EDITPROFILE_REQUEST, EDITPROFILE_SUCCESS, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS, STUDENT_DETAILS_REQUEST, STUDENT_DETAILS_SUCCESS, STUDENT_LOGIN_FAIL, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_RESET, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT, FORGET_PASSWORD_RESET, CONFIRM_PASSWORD_RESET } from "../../Constants/Profile Constants/studentConstants";



export const studentDetailsReducer = (state = {},action) => {
    switch (action.type){
        case STUDENT_DETAILS_REQUEST:
            return {loading:true};
        case STUDENT_DETAILS_SUCCESS:
            return{loading:false, success:true, studentDetail:action.payload};
        case STUDENT_LOGIN_FAIL:
            return {loading:false, error:action.payload,success:false}
        default:
            return state;
    }
}



export const editProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case EDITPROFILE_REQUEST:
      return { loading: true };
    case EDITPROFILE_SUCCESS:
      return { loading: false, success: true,studentDetail:action.payload };
    case EDITPROFILE_FAIL:
      return { loading: false, error: action.payload,success:false };
    case EDITPROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const noticeReducer = (state = {},action) => {
  switch (action.type){
      case STUDENT_DETAILS_REQUEST:
          return {loading:true};
      case STUDENT_DETAILS_SUCCESS:
          return{loading:false, success:true, noticeBoard:action.payload};
      case STUDENT_LOGIN_FAIL:
          return {loading:false, error:action.payload,success:false}
      default:
          return state;
  }
}