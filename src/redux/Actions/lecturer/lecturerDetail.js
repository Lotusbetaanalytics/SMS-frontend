import axios from "axios";
import { LECTURER_DETAILS_FAIL, LECTURER_DETAILS_REQUEST, LECTURER_DETAILS_SUCCESS } from "../../Constants/lecturer/lecturerDetail";

export const lecturerDetailsAction = () => async (dispatch,getState) => {

    try {
      dispatch({ type: LECTURER_DETAILS_REQUEST });  
      const { lecturerLogin : {userInfo}} = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.get("/user/account/", config);
      dispatch({ type: LECTURER_DETAILS_SUCCESS, payload: data });
      
      localStorage.setItem("lecturerDetails", JSON.stringify(data.staff[0].id));
      
    } catch (error) {
      dispatch({
        type: LECTURER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };