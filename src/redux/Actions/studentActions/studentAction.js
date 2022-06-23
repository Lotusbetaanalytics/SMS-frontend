import axios from "axios";
import { EDITPROFILE_FAIL, EDITPROFILE_REQUEST, EDITPROFILE_SUCCESS, NOTICE_FAIL, NOTICE_REQUEST, NOTICE_SUCCESS, STUDENT_DETAILS_FAIL, STUDENT_DETAILS_REQUEST, STUDENT_DETAILS_SUCCESS } from "../../Constants/studentConstants/studentConstants";


export const studentDetails = () => async (dispatch,getState) => {

  try {
    dispatch({ type: STUDENT_DETAILS_REQUEST });  
    const {studentLogin: {userInfo}} = getState();
    
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




export const studentNoticeAction = (id) => async (dispatch,getState) => {

  try {
    dispatch({ type: NOTICE_REQUEST });  
    const {studentLogin: {userInfo}} = getState();
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    const { data } = await axios.get(`/information/notice/${id}/`, config);
    dispatch({ type: NOTICE_SUCCESS, payload: data });
   
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
	

	