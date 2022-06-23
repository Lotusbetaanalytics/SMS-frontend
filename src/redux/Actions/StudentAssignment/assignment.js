import axios from "axios";
import { GET_ASSIGNMENT_BY_ID_FAIL, GET_ASSIGNMENT_BY_ID_REQUEST, GET_ASSIGNMENT_BY_ID_SUCCESS, POST_ASSIGNMENT_REQUEST } from "../../Constants/lecturer/lecturerAssessment";
import { GET_ASSIGNMENT_BY_STUDENT_ID_FAIL, GET_ASSIGNMENT_BY_STUDENT_ID_REQUEST, GET_ASSIGNMENT_BY_STUDENT_ID_SUCCESS, POST_ASSIGNMENT_RESPONSE_FAIL, POST_ASSIGNMENT_RESPONSE_REQUEST, POST_ASSIGNMENT_RESPONSE_SUCCESS } from "../../Constants/StudentAssignment/assignment";

export const getAssignmentByStudentIdAction = (studentId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ASSIGNMENT_BY_STUDENT_ID_REQUEST,
      });
  
      const {
        studentLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.get(`/assessment/assignmenttaker/?student__id=${studentId}`, config);
      dispatch({
        type: GET_ASSIGNMENT_BY_STUDENT_ID_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_ASSIGNMENT_BY_STUDENT_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const studentGetAssignmentByIdAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ASSIGNMENT_BY_ID_REQUEST,
      });
  
      const {
        studentLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.get(`/assessment/assignment/${id}/`, config);
      dispatch({
        type: GET_ASSIGNMENT_BY_ID_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_ASSIGNMENT_BY_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const postAssignmentResponseAction = (assignmentData, assignment_taker,assignment,answer) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_ASSIGNMENT_RESPONSE_REQUEST,
      });
  
      const {
        studentLogin: { userInfo },
      } = getState();
      console.log(userInfo.access)
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
        data:assignmentData

      };
      const { data } = await axios.post(
        "/assessment/assignmentresponse/",assignmentData,
        assignment_taker,assignment,answer,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.access}`,
          },
        }
      );
      dispatch({
        type: POST_ASSIGNMENT_RESPONSE_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: POST_ASSIGNMENT_RESPONSE_FAIL,
        payload:
          error.response && error.response.details
            ? error.response.details
            : error.message,
      });
    }
  };
  