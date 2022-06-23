import axios from "axios";
import { EDITPROFILE_FAIL, EDITPROFILE_REQUEST, EDITPROFILE_SUCCESS, PROFILE_PICTURE_FAIL, PROFILE_PICTURE_REQUEST, PROFILE_PICTURE_SUCCESS } from "../../Constants/ProfileConstants/profileConstants";

export const editProfile = (userdata) => async (dispatch,getState) =>{
    const {studentLogin:{userInfo}} = getState();
    
  try {
    dispatch({
      type:EDITPROFILE_REQUEST
    })
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    const { data } = await axios.patch("/user/account/",userdata, config);
    dispatch({ type: EDITPROFILE_SUCCESS, payload: data });
    
  } catch (error) {
    
    dispatch({
      type: EDITPROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const profilePicture = (id,formData) => async (dispatch,getState) =>{
  const {studentLogin:{userInfo}} = getState();
  
try {
  dispatch({
    type:PROFILE_PICTURE_REQUEST
  })
  
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${userInfo.access}`,
    },
  };
  const { data } = await axios.patch(`/user/biodata/${id}/`,formData, config);
  dispatch({ type: PROFILE_PICTURE_SUCCESS, payload: data });
  
} catch (error) {
  
  dispatch({
    type: PROFILE_PICTURE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
}

export const editLecturerProfile = (userdata) => async (dispatch,getState) =>{
  const {lecturerLogin:{userInfo}} = getState();
  
try {
  dispatch({
    type:EDITPROFILE_REQUEST
  })
  
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.access}`,
    },
  };
  const { data } = await axios.patch("/user/account/",userdata, config);
  dispatch({ type: EDITPROFILE_SUCCESS, payload: data });
  
} catch (error) {
  
  dispatch({
    type: EDITPROFILE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
}