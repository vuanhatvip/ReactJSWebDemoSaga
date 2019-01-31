import {FETCH_FAILED, DELETE_COMMENT, DELETE_COMMENT_SUCCESS} from '../../Actions/actionTypes';
const deleteCommentReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case DELETE_COMMENT_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default deleteCommentReducer;