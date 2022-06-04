import axios from "axios";
import { EDITPROFILE_FAIL, EDITPROFILE_REQUEST, EDITPROFILE_SUCCESS } from "../../Constants/ProfileConstants/profileConstants";

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