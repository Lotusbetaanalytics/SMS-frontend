import axios from "axios";
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
  HEALTH_DATA_RESET,
  HEALTH_DATA_FAIL,
  FAMILY_DATA_REQUEST,
  FAMILY_DATA_SUCCESS,
  FAMILY_DATA_RESET,
  FAMILY_DATA_FAIL,
} from "../constants/usersDataConstants";

export const postUsersData = (biodata, toast) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USERS_DATA_REQUEST,
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
    const { data } = await axios.post("/user/biodata/", biodata, config);
    dispatch({
      type: USERS_DATA_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("bioDataInfo", JSON.stringify(data));
    toast({
      status: "success",
      width: "50px",
      position: "top-right",
      isClosable: true,
      duration: 4000,
      description: "Bio-Data Created",
    });
    dispatch({ type: USERS_DATA_RESET });
  } catch (error) {
    //   console.log(error.response.data.message, error.message);
    dispatch({
      type: USERS_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postAcademicData =
  (academicdata, toast) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ACADEMIC_DATA_REQUEST,
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
        "/user/academic_history/",
        academicdata,
        config
      );
      dispatch({
        type: ACADEMIC_DATA_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("academicInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Academic History Created",
      });
      dispatch({ type: ACADEMIC_DATA_RESET });
    } catch (error) {
      //   console.log(error.response.data.message, error.message);
      dispatch({
        type: ACADEMIC_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const postHealthData =
  (healthdata, toast) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HEALTH_DATA_REQUEST,
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
        "/user/health_data/",
        healthdata,
        config
      );
      dispatch({
        type: HEALTH_DATA_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("academicInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Academic History Created",
      });
      dispatch({ type: HEALTH_DATA_RESET });
    } catch (error) {
      //   console.log(error.response.data.message, error.message);
      dispatch({
        type: HEALTH_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const postFamilyData =
  (familydata, toast) => async (dispatch, getState) => {
    try {
      dispatch({
        type: FAMILY_DATA_REQUEST,
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
        "/user/family_data/",
        familydata,
        config
      );
      dispatch({
        type: FAMILY_DATA_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("academicInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Academic History Created",
      });
      dispatch({ type: FAMILY_DATA_RESET });
    } catch (error) {
      //   console.log(error.response.data.message, error.message);
      dispatch({
        type: FAMILY_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
