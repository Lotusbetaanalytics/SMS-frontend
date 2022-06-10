import { CONFIRM_PASSWORD_FAIL, CONFIRM_PASSWORD_REQUEST, CONFIRM_PASSWORD_RESET, CONFIRM_PASSWORD_SUCCESS, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_RESET, FORGET_PASSWORD_SUCCESS, LECTURER_CONFIRM_PASSWORD_FAIL, LECTURER_CONFIRM_PASSWORD_REQUEST, LECTURER_CONFIRM_PASSWORD_RESET, LECTURER_CONFIRM_PASSWORD_SUCCESS, LECTURER_FORGET_PASSWORD_FAIL, LECTURER_FORGET_PASSWORD_REQUEST, LECTURER_FORGET_PASSWORD_RESET, LECTURER_FORGET_PASSWORD_SUCCESS, LECTURER_LOGIN_FAIL, LECTURER_LOGIN_REQUEST, LECTURER_LOGIN_RESET, LECTURER_LOGIN_SUCCESS, LECTURER_LOGOUT, STUDENT_LOGIN_FAIL, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_RESET, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT } from "../Constants/auth";

export const studentLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_LOGIN_REQUEST:
        return { loading: true };
      case STUDENT_LOGIN_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload };
      case STUDENT_LOGIN_FAIL:
        return { loading: false, error: action.payload,success:false };
        case STUDENT_LOGIN_RESET:
        return {};
      case STUDENT_LOGOUT:
        return {};
      default:
        return state;
    }
  };

  export const forgetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case FORGET_PASSWORD_REQUEST:
        return { loading: true };
      case FORGET_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case FORGET_PASSWORD_FAIL:
        return { loading: false, error: action.payload, success:false };
        case FORGET_PASSWORD_RESET:
          return {};
      default:
        return state;
    }
  };
  export const confirmPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case CONFIRM_PASSWORD_REQUEST:
        return { loading: true };
      case CONFIRM_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case CONFIRM_PASSWORD_FAIL:
        return { loading: false, error: action.payload, success:false };
        case CONFIRM_PASSWORD_RESET:
          return {};
      default:
        return state;
    }
  };

  //LECTURER REDUCER

  export const lecturerLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case LECTURER_LOGIN_REQUEST:
        return { loading: true };
      case LECTURER_LOGIN_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload };
      case LECTURER_LOGIN_FAIL:
        return { loading: false, error: action.payload, success:false };
        case LECTURER_LOGIN_RESET:
        return {};
      case LECTURER_LOGOUT:
        return {};
      default:
        return state;
    }
  };

  export const lecturerforgetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case LECTURER_FORGET_PASSWORD_REQUEST:
        return { loading: true };
      case LECTURER_FORGET_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case LECTURER_FORGET_PASSWORD_FAIL:
        return { loading: false, error: action.payload, success:false };
        case LECTURER_FORGET_PASSWORD_RESET:
          return {};
      default:
        return state;
    }
  };
  export const lecturerconfirmPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case LECTURER_CONFIRM_PASSWORD_REQUEST:
        return { loading: true };
      case LECTURER_CONFIRM_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case LECTURER_CONFIRM_PASSWORD_FAIL:
        return { loading: false, error: action.payload, success:false };
        case LECTURER_CONFIRM_PASSWORD_RESET:
          return {};
      default:
        return state;
    }
  };