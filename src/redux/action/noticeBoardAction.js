import axios from "axios";
import {
  POST_NOTICE_REQUEST,
  POST_NOTICE_SUCCESS,
  POST_NOTICE_FAIL,
  GET_NOTICE_REQUEST,
  GET_NOTICE_SUCCESS,
  GET_NOTICE_FAIL,
  POST_INFORMATION_REQUEST,
  POST_INFORMATION_SUCCESS,
  POST_INFORMATION_FAIL,
} from "../constants/noticeBoardConstants";

export const postNotice = (noticeData, toast) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_INFORMATION_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.access);
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
      type: POST_INFORMATION_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("Information", JSON.stringify(data));
    toast({
      status: "success",
      width: "50px",
      position: "top-right",
      isClosable: true,
      duration: 4000,
      description: "Information Created",
    });
  } catch (error) {
    dispatch({
      type: POST_INFORMATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getNotice = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_NOTICE_REQUEST,
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
    const { data } = await axios.get(`/information/notice/`, config);
    dispatch({
      type: GET_NOTICE_SUCCESS,
      payload: data,
    });
    localStorage.setItem("getNoticeInfo", JSON.stringify(data));
    console.log(data);
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

export const postInformation =
  (informationData, toast) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_NOTICE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      console.log(userInfo.access);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
      const { data } = await axios.post(
        "/information/information/",
        informationData,
        config
      );
      dispatch({
        type: POST_NOTICE_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("noticeInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Notice Created",
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
