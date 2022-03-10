import axios from "axios";
import {
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  STUDENT_LOGIN_FAIL,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGOUT,
} from "../studentConstants/studentConstants";

export const LoginStudent = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/user/token/", { email, password }, config);
    dispatch({ type: STUDENT_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("studentInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: STUDENT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const studentLogout = () => (dispatch) => {
    localStorage.removeItem("studentInfo")
    localStorage.removeItem("studentDetails")
    dispatch({
        type: STUDENT_LOGOUT,
      });
}

export const studentDetails = () => async (dispatch,getState) => {
  try {
    dispatch({ type: STUDENT_DETAILS_REQUEST });
    const {
      studentLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    const { data } = await axios.get("/user/account/", config);
    dispatch({ type: STUDENT_DETAILS_SUCCESS, payload: data });
    localStorage.setItem("studentDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: STUDENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
