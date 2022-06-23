import { DELETE_ASSIGNMENT_FAIL, DELETE_ASSIGNMENT_REQUEST, DELETE_ASSIGNMENT_RESET, DELETE_ASSIGNMENT_SUCCESS, DELETE_TEST_FAIL, DELETE_TEST_REQUEST, DELETE_TEST_RESET, DELETE_TEST_SUCCESS, EDIT_ASSIGNMENTTAKER_FAIL, EDIT_ASSIGNMENTTAKER_REQUEST, EDIT_ASSIGNMENTTAKER_RESET, EDIT_ASSIGNMENTTAKER_SUCCESS, EDIT_ASSIGNMENT_FAIL, EDIT_ASSIGNMENT_REQUEST, EDIT_ASSIGNMENT_RESET, EDIT_ASSIGNMENT_SUCCESS, EDIT_TEST_FAIL, EDIT_TEST_REQUEST, EDIT_TEST_RESET, EDIT_TEST_SUCCESS, GET_ASSIGNMENTTAKER_BY_ID_FAIL, GET_ASSIGNMENTTAKER_BY_ID_REQUEST, GET_ASSIGNMENTTAKER_BY_ID_SUCCESS, GET_ASSIGNMENTTAKER_BY_IT_ID_FAIL, GET_ASSIGNMENTTAKER_BY_IT_ID_REQUEST, GET_ASSIGNMENTTAKER_BY_IT_ID_SUCCESS, GET_ASSIGNMENT_BY_COURSE_FAIL, GET_ASSIGNMENT_BY_COURSE_REQUEST, GET_ASSIGNMENT_BY_COURSE_SUCCESS, GET_ASSIGNMENT_BY_ID_FAIL, GET_ASSIGNMENT_BY_ID_REQUEST, GET_ASSIGNMENT_BY_ID_SUCCESS, GET_ASSIGNMENT_BY_STAFF_ID_FAIL, GET_ASSIGNMENT_BY_STAFF_ID_REQUEST, GET_ASSIGNMENT_BY_STAFF_ID_SUCCESS, GET_TESTTAKER_BY_ID_FAIL, GET_TESTTAKER_BY_ID_REQUEST, GET_TESTTAKER_BY_ID_SUCCESS, GET_TEST_BY_COURSE_FAIL, GET_TEST_BY_COURSE_REQUEST, GET_TEST_BY_COURSE_SUCCESS, GET_TEST_BY_ID_FAIL, GET_TEST_BY_ID_REQUEST, GET_TEST_BY_ID_SUCCESS, GET_TEST_BY_SOURCE_FAIL, GET_TEST_BY_SOURCE_REQUEST, GET_TEST_BY_SOURCE_SUCCESS, POST_ASSIGNMENT_FAIL, POST_ASSIGNMENT_REQUEST, POST_ASSIGNMENT_RESET, POST_ASSIGNMENT_SUCCESS } from "../../Constants/lecturer/lecturerAssessment";

export const lecturerPostAssignmentReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_ASSIGNMENT_REQUEST:
        return { loading: true };
      case POST_ASSIGNMENT_SUCCESS:
        return { loading: false, success: true, postAssignment:action.payload };
      case POST_ASSIGNMENT_FAIL:
        return { loading: false, error: action.payload };
        case POST_ASSIGNMENT_RESET:
          return {};
      default:
        return state;
    }
  };

  export const lecturerGetAssignmentByCourseReducer = (state = [], action) => {
    switch (action.type) {
      case GET_ASSIGNMENT_BY_COURSE_REQUEST:
        return { loading: true };
      case GET_ASSIGNMENT_BY_COURSE_SUCCESS:
        return { loading: false, success: true, getAssignmentByCourse:action.payload.results };
      case GET_ASSIGNMENT_BY_COURSE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerGetAssignmentByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_ASSIGNMENT_BY_ID_REQUEST:
        return { loading: true };
      case GET_ASSIGNMENT_BY_ID_SUCCESS:
        return { loading: false, success: true, getAssignment:action.payload };
      case GET_ASSIGNMENT_BY_ID_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerGetAssignmentByStaffIdReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_ASSIGNMENT_BY_STAFF_ID_REQUEST:
        return { loading: true };
      case GET_ASSIGNMENT_BY_STAFF_ID_SUCCESS:
        return { loading: false, success: true, getAssignmentByStaffId:action.payload.results };
      case GET_ASSIGNMENT_BY_STAFF_ID_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerGetAssignmenttakerByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_ASSIGNMENTTAKER_BY_ID_REQUEST:
        return { loading: true };
      case GET_ASSIGNMENTTAKER_BY_ID_SUCCESS:
        return { loading: false, success: true, getAssignmenttakerById:action.payload.results };
      case GET_ASSIGNMENTTAKER_BY_ID_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerGetAssignmenttakerByItIdReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_ASSIGNMENTTAKER_BY_IT_ID_REQUEST:
        return { loading: true };
      case GET_ASSIGNMENTTAKER_BY_IT_ID_SUCCESS:
        return { loading: false, success: true, getAssignmenttakerByItId:action.payload };
      case GET_ASSIGNMENTTAKER_BY_IT_ID_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerEditAssignmentReducer = (state = { getAssignmentByCourse: [] }, action) => {
    switch (action.type) {
      case EDIT_ASSIGNMENT_REQUEST:
        return { loading: true };
      case EDIT_ASSIGNMENT_SUCCESS:
        return {
          loading: false,
          success: true,
          editAssignment: action.payload.results,
        };
      case EDIT_ASSIGNMENT_FAIL:
        return { loading: false, error: action.payload };
        case EDIT_ASSIGNMENT_RESET:
            return {};
      default:
        return state;
    }
  };
 
  export const lecturerDeleteAssignmnetReducer = (state = { postAssignment: [] }, action) => {
    switch (action.type) {
      case DELETE_ASSIGNMENT_REQUEST:
        return {
          ...state,
          postAssignment: state.postAssignment.filter((x) => x.id !== action.payload),
          loading:true,
       };
      case DELETE_ASSIGNMENT_SUCCESS:
        return {
          loading: false,
          success: true,
          deletedAssignment:action.payload,
        };
      case DELETE_ASSIGNMENT_FAIL:
        return { loading: false, error: action.payload };
        case DELETE_ASSIGNMENT_RESET:
            return {};
      default:
        return state;
    }
  };
 


  export const lecturerGetTestByCourseReducer = (state = [], action) => {
    switch (action.type) {
      case GET_TEST_BY_COURSE_REQUEST:
        return { loading: true };
      case GET_TEST_BY_COURSE_SUCCESS:
        return { loading: false, success: true, getTestByCourse:action.payload.results };
      case GET_TEST_BY_COURSE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerGetTestBySourceReducer = (state = [], action) => {
    switch (action.type) {
      case GET_TEST_BY_SOURCE_REQUEST:
        return { loading: true };
      case GET_TEST_BY_SOURCE_SUCCESS:
        return { loading: false, success: true, getTestBySource:action.payload.results };
      case GET_TEST_BY_SOURCE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerGetTesttakerByIdReducer = (state = [], action) => {
    switch (action.type) {
      case GET_TESTTAKER_BY_ID_REQUEST:
        return { loading: true };
      case GET_TESTTAKER_BY_ID_SUCCESS:
        return { loading: false, success: true, getTesttaker:action.payload.results };
      case GET_TESTTAKER_BY_ID_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerGetTestByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_TEST_BY_ID_REQUEST:
        return { loading: true };
      case GET_TEST_BY_ID_SUCCESS:
        return { loading: false, success: true, getTest:action.payload };
      case GET_TEST_BY_ID_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const lecturerEditTestReducer = (state = { getAssignmentByCourse: [] }, action) => {
    switch (action.type) {
      case EDIT_TEST_REQUEST:
        return { loading: true };
      case EDIT_TEST_SUCCESS:
        return {
          loading: false,
          success: true,
          editTest: action.payload.results,
        };
      case EDIT_TEST_FAIL:
        return { loading: false, error: action.payload };
        case EDIT_TEST_RESET:
            return {};
      default:
        return state;
    }
  };

  export const lecturerEditAssignmenttakerByItIdReducer = (state = { getAssignmenttakerByItId: [] }, action) => {
    switch (action.type) {
      case EDIT_ASSIGNMENTTAKER_REQUEST:
        return { loading: true };
      case EDIT_ASSIGNMENTTAKER_SUCCESS:
        return {
          loading: false,
          success: true,
          editAssignmentTaker: action.payload.results,
        };
      case EDIT_ASSIGNMENTTAKER_FAIL:
        return { loading: false, error: action.payload };
        case EDIT_ASSIGNMENTTAKER_RESET:
            return {};
      default:
        return state;
    }
  };
 
  export const lecturerDeleteTestReducer = (state = { postAssignment: [] }, action) => {
    switch (action.type) {
      case DELETE_TEST_REQUEST:
        return {
          ...state,
          getTestByCourse: state.getTestByCourse.filter((x) => x.id !== action.payload),
          loading:true,
       };
      case DELETE_TEST_SUCCESS:
        return {
          loading: false,
          success: true,
          getTestByCourse:action.payload,
        };
      case DELETE_TEST_FAIL:
        return { loading: false, error: action.payload };
        case DELETE_TEST_RESET:
            return {};
      default:
        return state;
    }
  };
 