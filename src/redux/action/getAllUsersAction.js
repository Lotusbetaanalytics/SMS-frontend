import axios from "axios";

import {
  TOTAL_STUDENT_REQUEST,
  TOTAL_STUDENT_SUCCESS,
  TOTAL_STUDENT_FAIL,
  TOTAL_STAFF_REQUEST,
  TOTAL_STAFF_SUCCESS,
  TOTAL_STAFF_FAIL,
} from "../constants/getAllUserConstants";

export const totalStudent = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOTAL_STUDENT_REQUEST,
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
    const { data } = await axios.get("/user/student/", config);
    dispatch({
      type: TOTAL_STUDENT_SUCCESS,
      payload: data,
    });
    localStorage.setItem("getAllStudents", JSON.stringify(data));
  } catch (error) {
    // console.log(error.response.data.message, error.message);
    dispatch({
      type: TOTAL_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const totalStaff = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOTAL_STAFF_REQUEST,
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
    const { data } = await axios.get("/user/staff/", config);
    dispatch({
      type: TOTAL_STAFF_SUCCESS,
      payload: data,
    });
    localStorage.setItem("allStaff", JSON.stringify(data));
  } catch (error) {
    console.log(error.response.data.message, error.message);
    dispatch({
      type: TOTAL_STAFF_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
