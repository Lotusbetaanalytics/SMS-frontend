import axios from "axios";
import { DELETE_ASSIGNMENT_FAIL, DELETE_ASSIGNMENT_REQUEST, DELETE_ASSIGNMENT_SUCCESS, DELETE_TEST_FAIL, DELETE_TEST_REQUEST, DELETE_TEST_SUCCESS, EDIT_ASSIGNMENTTAKER_FAIL, EDIT_ASSIGNMENTTAKER_REQUEST, EDIT_ASSIGNMENTTAKER_SUCCESS, EDIT_ASSIGNMENT_FAIL, EDIT_ASSIGNMENT_REQUEST, EDIT_ASSIGNMENT_SUCCESS, EDIT_TEST_FAIL, EDIT_TEST_REQUEST, EDIT_TEST_SUCCESS, GET_ASSIGNMENTTAKER_BY_ID_FAIL, GET_ASSIGNMENTTAKER_BY_ID_REQUEST, GET_ASSIGNMENTTAKER_BY_ID_SUCCESS, GET_ASSIGNMENTTAKER_BY_IT_ID_FAIL, GET_ASSIGNMENTTAKER_BY_IT_ID_REQUEST, GET_ASSIGNMENTTAKER_BY_IT_ID_SUCCESS, GET_ASSIGNMENT_BY_COURSE_FAIL, GET_ASSIGNMENT_BY_COURSE_REQUEST, GET_ASSIGNMENT_BY_COURSE_SUCCESS, GET_ASSIGNMENT_BY_ID_FAIL, GET_ASSIGNMENT_BY_ID_REQUEST, GET_ASSIGNMENT_BY_ID_SUCCESS, GET_ASSIGNMENT_BY_STAFF_ID_FAIL, GET_ASSIGNMENT_BY_STAFF_ID_REQUEST, GET_ASSIGNMENT_BY_STAFF_ID_SUCCESS, GET_TESTTAKER_BY_ID_FAIL, GET_TESTTAKER_BY_ID_REQUEST, GET_TESTTAKER_BY_ID_SUCCESS, GET_TEST_BY_COURSE_FAIL, GET_TEST_BY_COURSE_REQUEST, GET_TEST_BY_COURSE_SUCCESS, GET_TEST_BY_ID_FAIL, GET_TEST_BY_ID_REQUEST, GET_TEST_BY_ID_SUCCESS, GET_TEST_BY_SOURCE_FAIL, GET_TEST_BY_SOURCE_REQUEST, GET_TEST_BY_SOURCE_SUCCESS, POST_ASSIGNMENT_FAIL, POST_ASSIGNMENT_REQUEST, POST_ASSIGNMENT_SUCCESS } from "../../Constants/lecturer/lecturerAssessment";

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


  export const getAssignmentByCourseAction = (courseName) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ASSIGNMENT_BY_COURSE_REQUEST,
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
      const { data } = await axios.get(`/assessment/assignment/?course__name__icontains=${courseName}`, config);
      dispatch({
        type: GET_ASSIGNMENT_BY_COURSE_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_ASSIGNMENT_BY_COURSE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getAssignmentByStaffIdAction = (staffId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ASSIGNMENT_BY_STAFF_ID_REQUEST,
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
      const { data } = await axios.get(`/assessment/assignment/?supervisor__id=${staffId}`, config);
      dispatch({
        type: GET_ASSIGNMENT_BY_STAFF_ID_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_ASSIGNMENT_BY_STAFF_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getAssignmentTakerByIdAction = (assignmentId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ASSIGNMENTTAKER_BY_ID_REQUEST,
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
      const { data } = await axios.get(`/assessment/assignmenttaker/?assignment__id=${assignmentId}`, config);
      dispatch({
        type: GET_ASSIGNMENTTAKER_BY_ID_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_ASSIGNMENTTAKER_BY_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getAssignmentTakerByItIdAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ASSIGNMENTTAKER_BY_IT_ID_REQUEST,
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
      const { data } = await axios.get(`/assessment/assignmenttaker/${id}/`, config);
      dispatch({
        type: GET_ASSIGNMENTTAKER_BY_IT_ID_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_ASSIGNMENTTAKER_BY_IT_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getAssignmentByIdAction = (assignmentId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ASSIGNMENT_BY_ID_REQUEST,
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
      const { data } = await axios.get(`/assessment/assignment/${assignmentId}/`, config);
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


  export const lecturerEditAssignmentAction = (assignmemtData,id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: EDIT_ASSIGNMENT_REQUEST,
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
      const { data } = await axios.patch(
        `/assessment/assignment/${id}/`,
        assignmemtData,
        config
      );
      dispatch({
        type: EDIT_ASSIGNMENT_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: EDIT_ASSIGNMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const lecturerEditAssignmentTakerAction = (assignmentTakerData,id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: EDIT_ASSIGNMENTTAKER_REQUEST,
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
      const { data } = await axios.patch(
        `/assessment/assignmenttaker/${id}/`,
        assignmentTakerData,
        config
      );
      dispatch({
        type: EDIT_ASSIGNMENTTAKER_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: EDIT_ASSIGNMENTTAKER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const lecturerDeleteAssignmentAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_ASSIGNMENT_REQUEST,
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
      const { data } = await axios.delete(`/assessment/assignment/${id}/`, config);
      dispatch({
        type: DELETE_ASSIGNMENT_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: DELETE_ASSIGNMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const getTestByCourseAction = (courseName) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_TEST_BY_COURSE_REQUEST,
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
      const { data } = await axios.get(`/assessment/quiz/?course__name__icontains=${courseName}`, config);
      dispatch({
        type: GET_TEST_BY_COURSE_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_TEST_BY_COURSE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getTesttakerByTestIdAction = (testId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_TESTTAKER_BY_ID_REQUEST,
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
      const { data } = await axios.get(`/assessment/quiztaker/?quiz__id=${testId}`, config);
      dispatch({
        type: GET_TESTTAKER_BY_ID_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_TESTTAKER_BY_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getTestBySourceAction = (source) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_TEST_BY_SOURCE_REQUEST,
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
      const { data } = await axios.get(`/assessment/quiz/?supervisor__id=${source}`, config);
      dispatch({
        type: GET_TEST_BY_SOURCE_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_TEST_BY_SOURCE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const getTestByIdAction = (testId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_TEST_BY_ID_REQUEST,
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
      const { data } = await axios.get(`/assessment/quiz/${testId}/`, config);
      dispatch({
        type: GET_TEST_BY_ID_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_TEST_BY_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const lecturerEditTestAction = (testData,id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: EDIT_TEST_REQUEST,
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
      const { data } = await axios.patch(
        `/assessment/quiz/${id}/`,
        testData,
        config
      );
      dispatch({
        type: EDIT_TEST_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: EDIT_TEST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const lecturerDeleteTestAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_TEST_REQUEST,
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
      const { data } = await axios.delete(`/assessment/quiz/${id}/`, config);
      dispatch({
        type: DELETE_TEST_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: DELETE_TEST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//   export const postResponse =
//   (quiz_taker,question, answer) => async (dispatch,getState) => {
//     try {
//       dispatch({ type: RESPONSE_REQUEST });
//       const {
//         studentLogin: { userInfo },
//       } = getState();

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//           Authorization: `Bearer ${userInfo.access}`,
//         },
//       };
//       const { data } = await axios.post(
//         "/assessment/response/",
//         { quiz_taker,question, answer },
//         config
//       );
//       dispatch({
//         type: RESPONSE_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: RESPONSE_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };
