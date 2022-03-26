import axios from "axios";
import {
  CREATE_DEPARTMENT_REQUEST,
  CREATE_DEPARTMENT_SUCCESS,
  CREATE_DEPARTMENT_FAIL,
  GET_DEPARTMENT_REQUEST,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_FAIL,
  CREATE_SPECIALIZATION_REQUEST,
  CREATE_SPECIALIZATION_SUCCESS,
  CREATE_SPECIALIZATION_FAIL,
} from "../constants/departmentConstants";

export const postDepartment =
  (departmentData, toast) => async (dispatch, getState) => {
    console.log(departmentData);
    try {
      dispatch({
        type: CREATE_DEPARTMENT_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      console.log(userInfo.access);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.post(
        "/academics/department/",
        departmentData,
        config
      );
      dispatch({
        type: CREATE_DEPARTMENT_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("departmentInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Deparmnet Created",
      });
    } catch (error) {
      //   console.log(error.response.data.message, error.message);
      dispatch({
        type: CREATE_DEPARTMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getDepartment = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_DEPARTMENT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    const { data } = await axios.get(`/academics/department/`, config);
    dispatch({
      type: GET_DEPARTMENT_SUCCESS,
      payload: data,
    });
    localStorage.setItem("getDepartmentInfo", JSON.stringify(data));
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_DEPARTMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postSpecialization =
  (specializeData, toast) => async (dispatch, getState) => {
    console.log(specializeData);
    try {
      dispatch({
        type: CREATE_SPECIALIZATION_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      console.log(userInfo.access);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.post(
        "/academics/specialization/",
        specializeData,
        config
      );
      dispatch({
        type: CREATE_SPECIALIZATION_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("specializationInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Specialization Created",
      });
    } catch (error) {
      //   console.log(error.response.data.message, error.message);
      dispatch({
        type: CREATE_SPECIALIZATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
