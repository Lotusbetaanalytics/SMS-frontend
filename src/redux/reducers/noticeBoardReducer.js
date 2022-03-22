import {
  POST_NOTICE_REQUEST,
  POST_NOTICE_SUCCESS,
  POST_NOTICE_FAIL,
  POST_NOTICE_RESET,
} from "../constants/noticeBoardConstants";

export const postNoticeReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_NOTICE_REQUEST:
      return { loading: true };
    case POST_NOTICE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case POST_NOTICE_FAIL:
      return { loading: false, error: action.payload };
    case POST_NOTICE_RESET:
      return {};
    default:
      return state;
  }
};
