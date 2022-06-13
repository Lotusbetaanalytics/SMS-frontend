import axios from "axios";
import { GET_STUDENT_FAIL, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS } from "../../Constants/lecturer/lecturerGetStudent";

export const getStudentAction = (courseName) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_STUDENT_REQUEST,
      });
  
      const {
        lecturerLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.get(`/user/course_registration/?course__name__icontains=${courseName}`, config);
      dispatch({
        type: GET_STUDENT_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_STUDENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
