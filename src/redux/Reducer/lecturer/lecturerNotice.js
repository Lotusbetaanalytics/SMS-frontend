import { DELETE_COURSE_SUCCESS } from "../../Constants/courseRegisteration/courseRegisteration";
import { DELETE_NOTICE_FAIL, DELETE_NOTICE_REQUEST, DELETE_NOTICE_RESET, EDIT_NOTICE_FAIL, EDIT_NOTICE_REQUEST, EDIT_NOTICE_RESET, EDIT_NOTICE_SUCCESS, GET_NOTICE_BY_ID_FAIL, GET_NOTICE_BY_ID_REQUEST, GET_NOTICE_BY_ID_SUCCESS, GET_NOTICE_FAIL, GET_NOTICE_REQUEST, GET_NOTICE_SUCCESS, GET_SCOPE_FAIL, GET_SCOPE_REQUEST, GET_SCOPE_SUCCESS, POST_NOTICE_FAIL, POST_NOTICE_REQUEST, POST_NOTICE_RESET, POST_NOTICE_SUCCESS } from "../../Constants/lecturer/notice";

export const lecturerGetScopeReducer = (state = { getScope: [] }, action) => {
    switch (action.type) {
      case GET_SCOPE_REQUEST:
        return { loading: true };
      case GET_SCOPE_SUCCESS:
        return {
          loading: false,
          success: true,
          getScope: action.payload,
        };
      case GET_SCOPE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerPostNoticeReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_NOTICE_REQUEST:
        return { loading: true };
      case POST_NOTICE_SUCCESS:
        return { loading: false, success: true, postNotice: action.payload };
      case POST_NOTICE_FAIL:
        return { loading: false, error: action.payload };
      case POST_NOTICE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const lecturerGetNoticeReducer = (state = { getNotice: [] }, action) => {
    switch (action.type) {
      case GET_NOTICE_REQUEST:
        return { loading: true };
      case GET_NOTICE_SUCCESS:
        return {
          loading: false,
          success: true,
          getNotice: action.payload.results,
        };
      case GET_NOTICE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerGetNoticeByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_NOTICE_BY_ID_REQUEST:
        return { loading: true };
      case GET_NOTICE_BY_ID_SUCCESS:
        return {
          loading: false,
          success: true,
          getNoticeById: action.payload,
        };
      case GET_NOTICE_BY_ID_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerEditNoticeReducer = (state = { getNotice: [] }, action) => {
    switch (action.type) {
      case EDIT_NOTICE_REQUEST:
        return { loading: true };
      case EDIT_NOTICE_SUCCESS:
        return {
          loading: false,
          success: true,
          getNotice: action.payload.results,
        };
      case EDIT_NOTICE_FAIL:
        return { loading: false, error: action.payload };
        case EDIT_NOTICE_RESET:
            return {};
      default:
        return state;
    }
  };
 
  export const lecturerDeleteNoticeReducer = (state = { getNotice: [] }, action) => {
    switch (action.type) {
      case DELETE_NOTICE_REQUEST:
        return { loading: true };
      case DELETE_COURSE_SUCCESS:
        return {
          loading: false,
          success: true,
          getNotice: state.getNotice.filter((x) => x.id !== action.payload),
        };
      case DELETE_NOTICE_FAIL:
        return { loading: false, error: action.payload };
        case DELETE_NOTICE_RESET:
            return {};
      default:
        return state;
    }
  };
 
  