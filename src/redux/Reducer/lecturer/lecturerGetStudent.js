import { GET_STUDENT_FAIL, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS } from "../../Constants/lecturer/lecturerGetStudent";

export const lecturerGetStudentReducer = (state = [],action) => {
    switch (action.type){
        case GET_STUDENT_REQUEST:
            return {loading:true};
        case GET_STUDENT_SUCCESS:
            return{loading:false, success:true, getStudent:action.payload.results};
        case GET_STUDENT_FAIL:
            return {loading:false, error:action.payload,success:false}
        default:
            return state;
    }
}