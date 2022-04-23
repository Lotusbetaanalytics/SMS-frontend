import axios from "axios";
import {
  EDIT_STUDENTBYID_REQUEST,
  EDIT_STUDENTBYID_SUCCESS,
  EDIT_STUDENTBYID_FAIL,
} from "../constants/editUserDetailsConstants";

export const editStudentId =
  (id, userData, history) => async (dispatch, getState) => {
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
