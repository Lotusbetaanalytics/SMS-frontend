import axios from "axios";
import { ADD_COURSE_FAIL, ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS } from "../../Constants/courseRegisteration/courseRegisteration";

export const addCourseAction = (course,student,session,semester) => async (dispatch,getState) => {
    try {
      dispatch({ type: ADD_COURSE_REQUEST });
      const {studentLogin: {userInfo}} = getState();
      const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.access}`,
          },
      };
      const { data } = await axios.post("/user/course_registration/", { course,student,session,semester }, config);
      dispatch({ type: ADD_COURSE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADD_COURSE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const deleteCourseAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_COURSE_REQUEST,
      });
      const {studentLogin: {userInfo}} = getState();

      const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.access}`,
          },
      };
      const { data} = await axios.delete(
        `/user/course_registration/${id}/`,
        config
      );
      dispatch({
        type: DELETE_COURSE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_COURSE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  