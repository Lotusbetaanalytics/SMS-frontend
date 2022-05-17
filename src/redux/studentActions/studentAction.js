import axios from "axios";
import {
  CONFIRM_PASSWORD_FAIL,
  CONFIRM_PASSWORD_REQUEST,
  CONFIRM_PASSWORD_SUCCESS,
  EDITPROFILE_FAIL,
  EDITPROFILE_REQUEST,
  EDITPROFILE_SUCCESS,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  NOTICE_FAIL,
  NOTICE_REQUEST,
  NOTICE_SUCCESS,
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

export const studentDetails = () => async (dispatch,getState) => {

  try {
    dispatch({ type: STUDENT_DETAILS_REQUEST });  
    const {studentLogin: {userInfo}} = getState();
    
    // console.log(token)
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    // console.log(userInfo.access)
    const { data } = await axios.get("/user/account/", config);
    dispatch({ type: STUDENT_DETAILS_SUCCESS, payload: data });
    // console.log(data)
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


export const editProfile = (userdata) => async (dispatch,getState) =>{
    const {studentLogin} = getState();
    const token = studentLogin.userInfo.access
    console.log(token)
  try {
    dispatch({
      type:EDITPROFILE_REQUEST
    })
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.patch("/user/account/",userdata, config);
    dispatch({ type: EDITPROFILE_SUCCESS, payload: data });
    console.log(data)
  } catch (error) {
    console.log(error);
    dispatch({
      type: EDITPROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const studentNotice = (id) => async (dispatch,getState) => {

  try {
    dispatch({ type: NOTICE_REQUEST });  
    const {studentLogin: {userInfo}} = getState();
    
    // console.log(token)
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    // console.log(userInfo.access)
    const { data } = await axios.get(`/information/notice/${id}`, config);
    dispatch({ type: NOTICE_SUCCESS, payload: data });
    console.log(data)
    localStorage.setItem("studentDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: NOTICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
	
	