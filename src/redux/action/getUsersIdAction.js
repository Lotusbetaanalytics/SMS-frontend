import axios from "axios";
import {
  GET_STUDENTBYID_REQUEST,
  GET_STUDENTBYID_SUCCESS,
  GET_STUDENTBYID_FAIL,
} from "../constants/getUserIdConstants";

export const getStudentId =
  (id, setEditFirstName, setEditLastName, setEditEmail, setEditMatric_no) =>
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

      const { data } = await axios.get(`/user/student/${id}`, config);
      dispatch({
        type: GET_STUDENTBYID_SUCCESS,
        payload: data,
      });
      console.log(id);
      console.log(data, "from put request");
      console.log(data.user, "freeman");
      setEditFirstName(data.user.first_name);
      setEditLastName(data.user.last_name);
      setEditEmail(data.user.email);
      setEditMatric_no(data.matric_no);
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
