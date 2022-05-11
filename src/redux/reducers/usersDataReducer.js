import {
  USERS_DATA_REQUEST,
  USERS_DATA_SUCCESS,
  USERS_DATA_FAIL,
  USERS_DATA_RESET,
  ACADEMIC_DATA_REQUEST,
  ACADEMIC_DATA_SUCCESS,
  ACADEMIC_DATA_FAIL,
  ACADEMIC_DATA_RESET,
  HEALTH_DATA_REQUEST,
  HEALTH_DATA_SUCCESS,
  HEALTH_DATA_FAIL,
  HEALTH_DATA_RESET,
  FAMILY_DATA_REQUEST,
  FAMILY_DATA_SUCCESS,
  FAMILY_DATA_FAIL,
  FAMILY_DATA_RESET,
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

export const postAcademicDataReducer = (state = {}, action) => {
  switch (action.type) {
    case ACADEMIC_DATA_REQUEST:
      return { loading: true };
    case ACADEMIC_DATA_SUCCESS:
      return { loading: false, success: true, usersData: action.payload };
    case ACADEMIC_DATA_FAIL:
      return { loading: false, error: action.payload };
    case ACADEMIC_DATA_RESET:
      return {};
    default:
      return state;
  }
};

export const postHealthDataReducer = (state = {}, action) => {
  switch (action.type) {
    case HEALTH_DATA_REQUEST:
      return { loading: true };
    case HEALTH_DATA_SUCCESS:
      return { loading: false, success: true, usersData: action.payload };
    case HEALTH_DATA_FAIL:
      return { loading: false, error: action.payload };
    case HEALTH_DATA_RESET:
      return {};
    default:
      return state;
  }
};

export const postFamilyDataReducer = (state = {}, action) => {
  switch (action.type) {
    case FAMILY_DATA_REQUEST:
      return { loading: true };
    case FAMILY_DATA_SUCCESS:
      return { loading: false, success: true, usersData: action.payload };
    case FAMILY_DATA_FAIL:
      return { loading: false, error: action.payload };
    case FAMILY_DATA_RESET:
      return {};
    default:
      return state;
  }
};
