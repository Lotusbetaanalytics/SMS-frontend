import axios from "axios";
import {
  USERS_DATA_REQUEST,
  USERS_DATA_SUCCESS,
  USERS_DATA_FAIL,
  //   USERS_DATA_RESET,
} from "../constants/usersDataConstants";

export const postUsersData =
  (allUserData, toast) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USERS_DATA_REQUEST,
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
      const { data } = await axios.post("/user/biodata/", allUserData, config);
      dispatch({
        type: USERS_DATA_SUCCESS,
        payload: data,
      });
      console.log(data);
      localStorage.setItem("bioDataInfo", JSON.stringify(data));
      toast({
        status: "success",
        width: "50px",
        position: "top-right",
        isClosable: true,
        duration: 4000,
        description: "User Data Created",
      });
    } catch (error) {
      //   console.log(error.response.data.message, error.message);
      dispatch({
        type: USERS_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
