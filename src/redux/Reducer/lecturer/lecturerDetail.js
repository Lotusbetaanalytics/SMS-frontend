import { LECTURER_DETAILS_FAIL, LECTURER_DETAILS_REQUEST, LECTURER_DETAILS_SUCCESS } from "../../Constants/lecturer/lecturerDetail";

export const lecturerDetailsReducer = (state = [],action) => {
    switch (action.type){
        case LECTURER_DETAILS_REQUEST:
            return {loading:true};
        case LECTURER_DETAILS_SUCCESS:
            return{loading:false, success:true, lecturerDetail:action.payload};
        case LECTURER_DETAILS_FAIL:
            return {loading:false, error:action.payload,success:false}
        default:
            return state;
    }
}