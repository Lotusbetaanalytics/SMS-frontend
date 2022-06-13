import axios from "axios";
import {
  EDIT_STUDENTBYID_REQUEST,
  EDIT_STUDENTBYID_SUCCESS,
  EDIT_STUDENTBYID_FAIL,
  GET_STUDENTBYID_REQUEST,
  GET_STUDENTBYID_SUCCESS,
  GET_STUDENTBYID_FAIL,
} from "../constants/editStudentIdConstant";

export const editStudentId = (id, userData) => async (dispatch, getState) => {
  try {
    console.log(userData);
    console.log(id);
    dispatch({
      type: EDIT_STUDENTBYID_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
      data: userData,
    };
    const { data } = await axios.patch(`/user/student/${id}/`, userData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    });
    //   history.push("/viewquestion");
    dispatch({
      type: EDIT_STUDENTBYID_SUCCESS,
      payload: data,
    });
    console.log(data, "from put request");
  } catch (error) {
    console.log(error);
    dispatch({
      type: EDIT_STUDENTBYID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getStudentId =
  (
    id,
    setFirst_Name,
    setMiddle_Name,
    setLast_Name,
    setEmail,
    setMatric_no,
    setStudent_id,
    setSpecialization,
    setIsActive
  ) =>
  async (dispatch, getState) => {
    // console.log(data);
    try {
      dispatch({
        type: GET_STUDENTBYID_REQUEST,
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

      const { data } = await axios.get(`/user/student/${id}/`, config);
      dispatch({
        type: GET_STUDENTBYID_SUCCESS,
        payload: data,
      });
      console.log(id);
      console.log(data, "from put request");
      console.log(data.user, "freeman");
      setFirst_Name(data.user.first_name);
      setMiddle_Name(data.user.middle_name);
      setLast_Name(data.user.last_name);
      setEmail(data.user.email);
      setMatric_no(data.matric_no);
      setStudent_id(data.student_id);
      setSpecialization(data.user.specialization);
      setIsActive(data.is_active.toString());
      //   localStorage.setItem("studentid", JSON.stringify(data.data.studentid));
    } catch (error) {
      dispatch({
        type: GET_STUDENTBYID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
