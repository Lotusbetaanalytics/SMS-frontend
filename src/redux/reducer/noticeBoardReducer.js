import {
  GET_NOTICE_REQUEST,
  GET_NOTICE_SUCCESS,
  GET_NOTICE_FAIL,
} from "../constants/noticeBoardConstant";

export const getNoticeReducer = (state = { getNotice: [] }, action) => {
  switch (action.type) {
    case GET_NOTICE_REQUEST:
      return { loading: true };
    case GET_NOTICE_SUCCESS:
      return {
        loading: false,
        success: true,
        allNotice: action.payload.results,
      };
    case GET_NOTICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
