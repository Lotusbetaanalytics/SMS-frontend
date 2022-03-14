import axios from "axios";
import {
  NEWSTAFF_REQUEST,
  NEWSTAFF_SUCCESS,
  NEWSTAFF_FAIL,
} from "../constants/staffConstants";

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
    localStorage.setItem("userInfo", JSON.stringify(data));
    toast({
      status: "success",
      width: "80px",
      position: "top-right",
      isClosable: true,
      duration: 6000,
      description: "Staff Created",
      maxWidth: "100%",
    });
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
