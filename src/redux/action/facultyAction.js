import axios from "axios";

import {
  CREATE_FACULTY_REQUEST,
  CREATE_FACULTY_SUCCESS,
  CREATE_FACULTY_FAIL,
  GET_FACULTY_REQUEST,
  GET_FACULTY_SUCCESS,
  GET_FACULTY_FAIL,
} from "../constants/facultyConstants";

export const createNewFaculty =
  (facultyData, toast) => async (dispatch, getState) => {
    console.log(facultyData);
    try {
      dispatch({
        type: CREATE_FACULTY_REQUEST,
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
        "/academics/faculty/",
        facultyData,
        config
      );
      dispatch({
        type: CREATE_FACULTY_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("facultyInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Faculty Created",
      });
    } catch (error) {
      //   console.log(error.response.data.message, error.message);
      dispatch({
        type: CREATE_FACULTY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getfaculty = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_FACULTY_REQUEST,
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
    const { data } = await axios.get(`/academics/faculty/`, config);
    dispatch({
      type: GET_FACULTY_SUCCESS,
      payload: data,
    });
    localStorage.setItem("getfacultyInfo", JSON.stringify(data));
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_FACULTY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
