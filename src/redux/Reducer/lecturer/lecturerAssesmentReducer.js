import { POST_ASSIGNMENT_FAIL, POST_ASSIGNMENT_REQUEST, POST_ASSIGNMENT_SUCCESS } from "../../Constants/lecturer/lecturerAssessment";

export const lecturerPostAssignmentReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_ASSIGNMENT_REQUEST:
        return { loading: true };
      case POST_ASSIGNMENT_SUCCESS:
        return { loading: false, success: true, postAssignment:action.payload };
      case POST_ASSIGNMENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };