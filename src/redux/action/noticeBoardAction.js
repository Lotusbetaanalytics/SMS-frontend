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
  IMAGE_INFORMATION_REQUEST,
  IMAGE_INFORMATION_SUCCESS,
  IMAGE_INFORMATION_FAIL,
  POST_INFORMATION_RESET,
} from "../constants/noticeBoardConstants";

export const postNotice = (noticeData, toast) => async (dispatch, getState) => {
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
      "/information/notice/",
      noticeData,
      config
    );
    dispatch({
      type: POST_NOTICE_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("postNotice", JSON.stringify(data));
    toast({
      status: "success",
      width: "50px",
      position: "top-right",
      isClosable: true,
      duration: 4000,
      description: " Notice Post Created",
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
        "/information/information/",
        informationData,
        config
      );
      dispatch({
        type: POST_INFORMATION_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("InfoInformation", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Information Created",
      });
      dispatch({ type: POST_INFORMATION_RESET });
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

export const informationImage =
  (formData, toast) => async (dispatch, getState) => {
    try {
      dispatch({
        type: IMAGE_INFORMATION_REQUEST,
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
        "/information/image/",
        formData,
        config
      );
      dispatch({
        type: IMAGE_INFORMATION_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("InfoImage", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "Information Image Created",
      });
    } catch (error) {
      dispatch({
        type: IMAGE_INFORMATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
