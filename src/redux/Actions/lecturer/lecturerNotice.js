import axios from "axios";
import { DELETE_NOTICE_FAIL, DELETE_NOTICE_REQUEST, DELETE_NOTICE_SUCCESS, EDIT_NOTICE_FAIL, EDIT_NOTICE_REQUEST, EDIT_NOTICE_SUCCESS, GET_NOTICE_BY_ID_FAIL, GET_NOTICE_BY_ID_REQUEST, GET_NOTICE_BY_ID_SUCCESS, GET_NOTICE_FAIL, GET_NOTICE_REQUEST, GET_NOTICE_SUCCESS, GET_SCOPE_FAIL, GET_SCOPE_REQUEST, GET_SCOPE_SUCCESS, POST_NOTICE_FAIL, POST_NOTICE_REQUEST, POST_NOTICE_SUCCESS } from "../../Constants/lecturer/notice";

export const lecturerGetScopeAction = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_SCOPE_REQUEST,
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
      const { data } = await axios.get(`/information/scope/`, config);
      console.log(data)
      dispatch({
        type: GET_SCOPE_SUCCESS,
        payload: data,
      });
      localStorage.setItem("getScopeInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: GET_SCOPE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const lecturerPostNoticeAction = (noticeData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_NOTICE_REQUEST,
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
      const { data } = await axios.post(
        "/information/notice/",
        noticeData,
        config
      );
      dispatch({
        type: POST_NOTICE_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: POST_NOTICE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const getNoticeAction = (lecturerEmail) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_NOTICE_REQUEST,
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
      const { data } = await axios.get(`/information/notice/?source__email__icontains=${lecturerEmail}`, config);
      dispatch({
        type: GET_NOTICE_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_NOTICE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getNoticeByIdAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_NOTICE_BY_ID_REQUEST,
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
      const { data } = await axios.get(`/information/notice/${id}/`, config);
      dispatch({
        type: GET_NOTICE_BY_ID_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: GET_NOTICE_BY_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const lecturerEditNoticeAction = (noticeData,id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: EDIT_NOTICE_REQUEST,
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
        `/information/notice/${id}/`,
        noticeData,
        config
      );
      dispatch({
        type: EDIT_NOTICE_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: EDIT_NOTICE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const lecturerDeleteNoticeAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_NOTICE_REQUEST,
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
      const { data } = await axios.delete(`/information/notice/${id}`, config);
      dispatch({
        type: DELETE_NOTICE_SUCCESS,
        payload: data,
      });
      
     
    } catch (error) {
      dispatch({
        type: DELETE_NOTICE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };