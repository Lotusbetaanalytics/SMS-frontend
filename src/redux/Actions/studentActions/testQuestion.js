import axios from "axios";
import { QUESTION_FAIL, QUESTION_REQUEST, QUESTION_SUCCESS, RESPONSE_FAIL, RESPONSE_REQUEST, RESPONSE_SUCCESS } from "../../Constants/studentConstants/testQuestion";


export const getTestquestion = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: QUESTION_REQUEST });
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
      const { data } = await axios.get(`/assessment/quiztaker/${id}/`, config);
      dispatch({
        type: QUESTION_SUCCESS,
        payload: data,
      });
     
      localStorage.setItem("question", JSON.stringify(data));
      console.log(data)
    } catch (error) {
      dispatch({
        type: QUESTION_FAIL,
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
