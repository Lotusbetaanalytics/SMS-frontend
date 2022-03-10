import { STUDENT_DETAILS_REQUEST, STUDENT_DETAILS_SUCCESS, STUDENT_LOGIN_FAIL, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_RESET, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT } from "../studentConstants/studentConstants";

export const studentLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_LOGIN_REQUEST:
        return { loading: true };
      case STUDENT_LOGIN_SUCCESS:
        return { loading: false, success: true, studentInfo: action.payload };
      case STUDENT_LOGIN_FAIL:
        return { loading: false, error: action.payload };
        case STUDENT_LOGIN_RESET:
        return {};
      case STUDENT_LOGOUT:
        return {};
      default:
        return state;
    }
  };

export const studentDetailsReducer = (state = {},action) => {
    switch (action.type){
        case STUDENT_DETAILS_REQUEST:
            return {loading:true};
        case STUDENT_DETAILS_SUCCESS:
            return{loading:false, success:true, studentDetails:action.payload};
        case STUDENT_LOGIN_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}