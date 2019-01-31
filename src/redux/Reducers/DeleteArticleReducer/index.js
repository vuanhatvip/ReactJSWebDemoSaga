import {FETCH_FAILED, DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS} from '../../Actions/actionTypes';
const deleteArticleReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case DELETE_ARTICLE_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default deleteArticleReducer;