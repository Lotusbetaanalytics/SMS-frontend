import { NOTICE_FAIL, NOTICE_REQUEST, NOTICE_SUCCESS, STUDENT_DETAILS_FAIL, STUDENT_DETAILS_REQUEST, STUDENT_DETAILS_SUCCESS } from "../../Constants/studentConstants/studentConstants";


export const studentDetailsReducer = (state = {},action) => {
    switch (action.type){
        case STUDENT_DETAILS_REQUEST:
            return {loading:true};
        case STUDENT_DETAILS_SUCCESS:
            return{loading:false, success:true, studentDetail:action.payload};
        case STUDENT_DETAILS_FAIL:
            return {loading:false, error:action.payload,success:false}
        default:
            return state;
    }
}

export const noticeReducer = (state = {},action) => {
  switch (action.type){
      case NOTICE_REQUEST:
          return {loading:true};
      case NOTICE_SUCCESS:
          return{loading:false, success:true, noticeBoard:action.payload};
      case NOTICE_FAIL:
          return {loading:false, error:action.payload,success:false}
      default:
          return state;
  }
}