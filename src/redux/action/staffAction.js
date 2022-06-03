import axios from "axios";
import {
  NEWSTAFF_REQUEST,
  NEWSTAFF_SUCCESS,
  NEWSTAFF_FAIL,
  DELETE_STAFFBYID_REQUEST,
  DELETE_STAFFBYID_SUCCESS,
  DELETE_STAFFBYID_FAIL,
  TOTAL_STAFF_REQUEST,
  TOTAL_STAFF_SUCCESS,
  TOTAL_STAFF_FAIL,
} from "../constants/staffConstant";

export const newStaff = (staffData, toast) => async (dispatch, getState) => {
  // console.log(staffData);
  try {
    dispatch({
      type: NEWSTAFF_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    //   console.log(userInfo.access);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    const { data } = await axios.post("/user/staff/", staffData, config);
    dispatch({
      type: NEWSTAFF_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: NEWSTAFF_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteStaffId = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_STAFFBYID_REQUEST,
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

    const { data } = await axios.delete(`/user/staff/${id}/`, config);
    dispatch({
      type: DELETE_STAFFBYID_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    // console.log(error.response.data.message, error.message);
    dispatch({
      type: DELETE_STAFFBYID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const totalStaff = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOTAL_STAFF_REQUEST,
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
    const { data } = await axios.get("/user/staff/", config);
    dispatch({
      type: TOTAL_STAFF_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response.data.message, error.message);
    dispatch({
      type: TOTAL_STAFF_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
