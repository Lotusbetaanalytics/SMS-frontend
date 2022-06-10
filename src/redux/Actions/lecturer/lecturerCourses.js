import axios from "axios";
import { LECTURER_COURSES_FAIL, LECTURER_COURSES_REQUEST, LECTURER_COURSES_SUCCESS } from "../../Constants/lecturer/lecturerCourses";

export const lecturerCourseAction = (id) => async (dispatch,getState) => {

    try {
      dispatch({ type: LECTURER_COURSES_REQUEST });  
      const {lecturerLogin: {userInfo}} = getState();
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.get(`/user/staff/${id}/`, config);
      dispatch({ type: LECTURER_COURSES_SUCCESS, payload: data });
      
    } catch (error) {
      dispatch({
        type: LECTURER_COURSES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
      