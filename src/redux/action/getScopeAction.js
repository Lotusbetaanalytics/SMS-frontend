import axios from "axios";
import {
  GET_SCOPE_REQUEST,
  GET_SCOPE_SUCCESS,
  GET_SCOPE_FAIL,
  GET_INFORMATION_REQUEST,
  GET_INFORMATION_SUCCESS,
  GET_INFORMATION_FAIL,
} from "../constants/scopeConstants";

export const getScope = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_SCOPE_REQUEST,
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
    const { data } = await axios.get(`/information/scope/`, config);
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

export const getInformation = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_INFORMATION_REQUEST,
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
    const { data } = await axios.get(`/information/information/`, config);
    dispatch({
      type: GET_INFORMATION_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("getInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_INFORMATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
