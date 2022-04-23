import axios from "axios";
import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAIL,
  DELETE_STUDENTBYID_REQUEST,
  DELETE_STUDENTBYID_SUCCESS,
  DELETE_STUDENTBYID_FAIL,
} from "../constants/createStudentConstants";

export const createNewStudent =
  (studentData, toast) => async (dispatch, getState) => {
    // console.log(studentData);
    try {
      dispatch({
        type: CREATE_STUDENT_REQUEST,
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
      const { data } = await axios.post("/user/student/", studentData, config);
      dispatch({
        type: CREATE_STUDENT_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 9000,
        description: "Student Created",
        maxWidth: "100%",
      });
    } catch (error) {
      console.log(error.response.data.message, error.message);
      dispatch({
        type: CREATE_STUDENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteStudentId = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_STUDENTBYID_REQUEST,
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

    const { data } = await axios.delete(`/user/student/${id}/`, config);
    dispatch({
      type: DELETE_STUDENTBYID_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    // console.log(error.response.data.message, error.message);
    dispatch({
      type: DELETE_STUDENTBYID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
