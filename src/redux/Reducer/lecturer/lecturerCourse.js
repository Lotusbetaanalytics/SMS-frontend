import { LECTURER_COURSES_FAIL, LECTURER_COURSES_REQUEST, LECTURER_COURSES_SUCCESS } from "../../Constants/lecturer/lecturerCourses";

export const lecturerCoursesReducer = (state = {},action) => {
    switch (action.type){
        case LECTURER_COURSES_REQUEST:
            return {loading:true};
        case LECTURER_COURSES_SUCCESS:
            return{loading:false, success:true, lecturerCourses:action.payload};
        case LECTURER_COURSES_FAIL:
            return {loading:false, error:action.payload,success:false}
        default:
            return state;
    }
}