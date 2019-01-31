import {FETCH_FAILED, ADD_COMMENT, ADD_COMMENT_SUCCESS} from '../../Actions/actionTypes';
const addCommentReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case ADD_COMMENT_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default addCommentReducer;