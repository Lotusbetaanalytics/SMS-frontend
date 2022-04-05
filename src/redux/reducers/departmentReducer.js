import {
  CREATE_DEPARTMENT_REQUEST,
  CREATE_DEPARTMENT_SUCCESS,
  CREATE_DEPARTMENT_FAIL,
  CREATE_DEPARTMENT_RESET,
  GET_DEPARTMENT_REQUEST,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_FAIL,
  CREATE_SPECIALIZATION_REQUEST,
  CREATE_SPECIALIZATION_SUCCESS,
  CREATE_SPECIALIZATION_FAIL,
  CREATE_SPECIALIZATION_RESET,
  GET_SPECIALIZATION_REQUEST,
  GET_SPECIALIZATION_SUCCESS,
  GET_SPECIALIZATION_FAIL,
} from "../constants/departmentConstants";

export const createDepartmentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_DEPARTMENT_REQUEST:
      return { loading: true };
    case CREATE_DEPARTMENT_SUCCESS:
      return { loading: false, success: true, departmentid: action.payload };
    case CREATE_DEPARTMENT_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_DEPARTMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const getDepartmentReducer = (state = { getDepartment: [] }, action) => {
  switch (action.type) {
    case GET_DEPARTMENT_REQUEST:
      return { loading: true };
    case GET_DEPARTMENT_SUCCESS:
      return {
        loading: false,
        success: true,
        departmentid: action.payload.results,
      };
    case GET_DEPARTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postSpecilizationReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SPECIALIZATION_REQUEST:
      return { loading: true };
    case CREATE_SPECIALIZATION_SUCCESS:
      return { loading: false, success: true, specialization: action.payload };
    case CREATE_SPECIALIZATION_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_SPECIALIZATION_RESET:
      return {};
    default:
      return state;
  }
};

export const getSpecializationReducer = (
  state = { getSpecialization: [] },
  action
) => {
  switch (action.type) {
    case GET_SPECIALIZATION_REQUEST:
      return { loading: true };
    case GET_SPECIALIZATION_SUCCESS:
      return {
        loading: false,
        success: true,
        specializationid: action.payload.results,
      };
    case GET_SPECIALIZATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
