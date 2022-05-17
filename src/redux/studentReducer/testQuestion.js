import { QUESTION_FAIL, QUESTION_REQUEST, QUESTION_SUCCESS, RESPONSE_FAIL, RESPONSE_REQUEST, RESPONSE_SUCCESS } from "../studentConstants/testQuestion";

export const questionsReducer = (state = {questions:[]}, action) => {
    switch (action.type) {
      case QUESTION_REQUEST:
        return { loading: true };
      case QUESTION_SUCCESS:
        return { loading: false, success: true, questions: action.payload.data };
      case QUESTION_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};

export const ResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case RESPONSE_REQUEST:
        return { loading: true };
      case RESPONSE_SUCCESS:
        return { loading: false, success: true };
      case RESPONSE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };