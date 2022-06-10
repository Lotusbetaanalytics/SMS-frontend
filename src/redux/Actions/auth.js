import axios from "axios";
import { CONFIRM_PASSWORD_FAIL, CONFIRM_PASSWORD_REQUEST, CONFIRM_PASSWORD_SUCCESS, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS, LECTURER_CONFIRM_PASSWORD_FAIL, LECTURER_CONFIRM_PASSWORD_REQUEST, LECTURER_CONFIRM_PASSWORD_SUCCESS, LECTURER_FORGET_PASSWORD_FAIL, LECTURER_FORGET_PASSWORD_REQUEST, LECTURER_FORGET_PASSWORD_SUCCESS, LECTURER_LOGIN_FAIL, LECTURER_LOGIN_REQUEST, LECTURER_LOGIN_SUCCESS, LECTURER_LOGOUT, STUDENT_LOGIN_FAIL, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT } from "../Constants/auth";


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
  export const forgetpassword = (email) => async (dispatch) => {
    try {
      dispatch({ type: FORGET_PASSWORD_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/password_reset/",
        { email },
        config
      );
      dispatch({
        type: FORGET_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FORGET_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const Confirmpassword = (password,token) => async (dispatch) => {
    try {
      dispatch({ type: CONFIRM_PASSWORD_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/password_reset/confirm/",
        { password,token },
        config
      );
      dispatch({
        type: CONFIRM_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CONFIRM_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  //lecturer auth



export const lecturerLoginAction = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LECTURER_LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json", 
        },
      };
      const { data } = await axios.post("/user/token/", { email, password }, config);
      dispatch({ type: LECTURER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("lecturerInfo", JSON.stringify(data));
      
    } catch (error) {
      dispatch({
        type: LECTURER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const lecturerLogoutAction = () => (dispatch) => {
      localStorage.removeItem("lecturerInfo")
      localStorage.removeItem("lecturerDetails")
      dispatch({
          type: LECTURER_LOGOUT,
        });
  }
  export const lecturerForgetpasswordAction = (email) => async (dispatch) => {
    try {
      dispatch({ type: LECTURER_FORGET_PASSWORD_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/password_reset/",
        { email },
        config
      );
      dispatch({
        type: LECTURER_FORGET_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LECTURER_FORGET_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const lecturerConfirmpasswordAction = (password,token) => async (dispatch) => {
    try {
      dispatch({ type: LECTURER_CONFIRM_PASSWORD_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/password_reset/confirm/",
        { password,token },
        config
      );
      dispatch({
        type: LECTURER_CONFIRM_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {

      dispatch({
        type: LECTURER_CONFIRM_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };