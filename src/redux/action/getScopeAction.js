import axios from "axios";
import {
  GET_SCOPE_REQUEST,
  GET_SCOPE_SUCCESS,
  GET_SCOPE_FAIL,
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
    // localStorage.setItem("getScopeInfo", JSON.stringify(data));
    console.log(data);
  } catch (error) {
    // console.log(error.response.data.message, error.message);
    dispatch({
      type: GET_SCOPE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
