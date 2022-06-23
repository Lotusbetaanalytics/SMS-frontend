
import { GET_ASSIGNMENT_BY_STUDENT_ID_FAIL, GET_ASSIGNMENT_BY_STUDENT_ID_REQUEST, GET_ASSIGNMENT_BY_STUDENT_ID_SUCCESS, POST_ASSIGNMENT_RESPONSE_FAIL, POST_ASSIGNMENT_RESPONSE_REQUEST, POST_ASSIGNMENT_RESPONSE_RESET, POST_ASSIGNMENT_RESPONSE_SUCCESS } from "../../Constants/StudentAssignment/assignment";

export const getAssignmentByStudentIdReducer = (state = [],action) => {
    switch (action.type){
        case GET_ASSIGNMENT_BY_STUDENT_ID_REQUEST:
            return {loading:true};
        case GET_ASSIGNMENT_BY_STUDENT_ID_SUCCESS:
            return{loading:false, success:true, getAssignmentByStudent:action.payload.results};
        case GET_ASSIGNMENT_BY_STUDENT_ID_FAIL:
            return {loading:false, error:action.payload,success:false}
        default:
            return state;
    }
}

export const postAssignmentResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_ASSIGNMENT_RESPONSE_REQUEST:
        return { loading: true };
      case POST_ASSIGNMENT_RESPONSE_SUCCESS:
        return { loading: false, success: true, postAssignment: action.payload };
      case POST_ASSIGNMENT_RESPONSE_FAIL:
        return { loading: false, error: action.payload };
      case POST_ASSIGNMENT_RESPONSE_RESET:
        return {};
      default:
        return state;
    }
  };

// export const getAssignmentByStudentIdReducer = (state = [],action) => {
//     switch (action.type){
//         case GET_ASSIGNMENT_BY_STUDENT_ID_REQUEST:
//             return {loading:true};
//         case GET_ASSIGNMENT_BY_STUDENT_ID_SUCCESS:
//             return{loading:false, success:true, getAssignmentByStudent:action.payload.results};
//         case GET_ASSIGNMENT_BY_STUDENT_ID_FAIL:
//             return {loading:false, error:action.payload,success:false}
//         default:
//             return state;
//     }
// }