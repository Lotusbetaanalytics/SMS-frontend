import {
  USERS_DATA_REQUEST,
  USERS_DATA_SUCCESS,
  USERS_DATA_FAIL,
  USERS_DATA_RESET,
} from "../constants/usersDataConstants";

export const postUserDataReducer = (state = {}, action) => {
  switch (action.type) {
    case USERS_DATA_REQUEST:
      return { loading: true };
    case USERS_DATA_SUCCESS:
      return { loading: false, success: true, usersData: action.payload };
    case USERS_DATA_FAIL:
      return { loading: false, error: action.payload };
    case USERS_DATA_RESET:
      return {};
    default:
      return state;
  }
};
