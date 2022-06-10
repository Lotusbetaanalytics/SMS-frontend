import axios from "axios";
import { POST_ASSIGNMENT_FAIL, POST_ASSIGNMENT_REQUEST, POST_ASSIGNMENT_SUCCESS } from "../../Constants/lecturer/lecturerAssessment";

export const lecturerPostAssignmentAction =
  (title,question,course,max_score,due_date) => async (dispatch,getState) => {
    try {
      dispatch({ type: POST_ASSIGNMENT_REQUEST });
      const {
        lecturerLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.post(
        "/assessment/assignment/",
        { title,question,course,max_score,due_date },
        config
      );
      dispatch({
        type: POST_ASSIGNMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_ASSIGNMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const postResponse =
  (quiz_taker,question, answer) => async (dispatch,getState) => {
    try {
      dispatch({ type: RESPONSE_REQUEST });
      const {
        studentLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.post(
        "/assessment/response/",
        { quiz_taker,question, answer },
        config
      );
      dispatch({
        type: RESPONSE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RESPONSE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
