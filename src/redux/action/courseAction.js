import axios from "axios";
import {
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAIL,
} from "../constants/courseConstants";

export const getCourse = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_COURSE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    const { data } = await axios.get(`/academics/course/`, config);
    dispatch({
      type: GET_COURSE_SUCCESS,
      payload: data,
    });
    localStorage.setItem("getCourseInfo", JSON.stringify(data));
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
